"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Articulo = {
  id: number;
  name: string;
  price?: number;
  quantity?: number;
  image?: {
    src: string;
  };
};

// ELIMINADO CartContextType, dejamos que TS infiera el tipo
const CartContext = createContext<
  | {
      articulos: Articulo[];
      total: number;
      setArticulos: React.Dispatch<React.SetStateAction<Articulo[]>>;
    }
  | undefined
>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [articulos, setArticulos] = useState<Articulo[]>([]);

  useEffect(() => {
    const guardado = localStorage.getItem("carrito");
    if (guardado) {
      setArticulos(JSON.parse(guardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(articulos));
  }, [articulos]);

  const total = articulos.reduce(
    (suma, item) => suma + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider value={{ articulos, total, setArticulos }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
};
