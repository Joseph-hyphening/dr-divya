'use client';

import React, { createContext, useContext } from 'react';

interface RoleContextType {
  email: string | null;
}

export const RoleContext = createContext<RoleContextType>({ email: null });

export const useRole = () => useContext(RoleContext);
