/**
 * Client-side WebP image conversion and validation utilities
 */

/**
 * Validates if an image file or MIME type is WebP
 */
export function isWebP(fileOrMime: File | string): boolean {
  if (typeof fileOrMime === 'string') {
    return fileOrMime.toLowerCase().includes('webp') || fileOrMime.toLowerCase().endsWith('.webp');
  }
  return fileOrMime.type === 'image/webp' || fileOrMime.name.toLowerCase().endsWith('.webp');
}

/**
 * Converts any image file (PNG, JPEG, GIF, etc.) to an optimized WebP base64 data URL.
 * Automatically resizes image to maximum dimensions if provided to ensure fast loading and storage efficiency.
 */
export async function convertToWebP(
  file: File, 
  maxWidth = 1200, 
  maxHeight = 1200, 
  quality = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new window.Image();
      img.onload = () => {
        let { width, height } = img;

        // Calculate aspect ratio preserving bounds
        if (width > maxWidth || height > maxHeight) {
          if (width / height > maxWidth / maxHeight) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          } else {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Failed to obtain canvas 2D rendering context.'));
          return;
        }

        // Draw image onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Convert to WebP format
        try {
          const webpDataUrl = canvas.toDataURL('image/webp', quality);
          resolve(webpDataUrl);
        } catch {
          // Fallback if browser canvas does not support image/webp
          resolve(canvas.toDataURL('image/jpeg', quality));
        }
      };

      img.onerror = () => {
        reject(new Error('Failed to load image for WebP conversion.'));
      };

      if (e.target?.result) {
        img.src = e.target.result as string;
      } else {
        reject(new Error('FileReader result is empty.'));
      }
    };

    reader.onerror = () => reject(new Error('Failed to read image file.'));
    reader.readAsDataURL(file);
  });
}
