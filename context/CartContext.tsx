"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export type Articulo = {
  id: string; // <- ahora string
  name: string;
  price?: number;
  quantity?: number;
  image?: {
    src: string;
  };
};

type CartContextType = {
  articulos: Articulo[];
  total: number;
  setArticulos: React.Dispatch<React.SetStateAction<Articulo[]>>;
  addItem: (item: Articulo) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [articulos, setArticulos] = useState<Articulo[]>([]);

  // Cargar del localStorage al inicio
  useEffect(() => {
    const guardado = typeof window !== "undefined"
      ? localStorage.getItem("carrito")
      : null;
    if (guardado) {
      setArticulos(JSON.parse(guardado));
    }
  }, []);

  // Guardar en localStorage cuando cambie el carrito
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("carrito", JSON.stringify(articulos));
    }
  }, [articulos]);

  const addItem: CartContextType["addItem"] = (item) => {
    setArticulos((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: (p.quantity || 1) + 1 }
            : p
        );
      }
      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: 1,
          image: { src: item.image?.src ?? "" },
        },
      ];
    });
  };

  const total = articulos.reduce(
    (suma, item) => suma + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <CartContext.Provider
      value={{ articulos, total, setArticulos, addItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
};
