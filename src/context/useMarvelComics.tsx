import React, {
  ChangeEvent,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

interface TypesComic {
  id: number;
  title: string;
  favorite?: boolean;
  thumbnail: {
    path: string;
    extension: string;
  };
  images: {
    path: string;
    extension: string;
  }[];
}

interface TypesContext {
  loading: boolean;
  comics: TypesComic[];
  favoriteComics: number[];
  handleFavorite: (id: number, index: number) => void;
  handleNextPage: (offset: number) => void;
  handlePreviusPage: (offset: number) => void;
  handlesearchComics: (value: string) => void;
  offset: number;
}

interface TypeProvaider {
  children: ReactNode;
}

const ContextComics = createContext<TypesContext>({} as TypesContext);

export const ProvaiderComics: React.FC<TypeProvaider> = (props) => {
  const { children } = props;

  const [comics, setComics] = useState<TypesComic[]>([] as TypesComic[]);
  const [offset, setOffset] = useState<number>(0);
  const [search, setSearch] = useState<any>("");
  const [favoriteComics, setFavoriteComics] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const getComics = async (off = 0, search = null) => {
    setLoading(true);
    if (search === "") {
      search = null;
    }
    const resp = await api.get("comics", {
      params: {
        limit: 20,
        offset: off,
        titleStartsWith: search,
      },
    });

    if (resp.status === 200) {
      setLoading(false);
      setComics(resp.data.data.results);
      setOffset(off);
    } else {
      setLoading(false);
      alert("Erro ao carregar dados da API");
    }
  };

  const handleFavorite = (id: number, index: number) => {
    const comic = [...comics];

    comic[index].favorite = !comic[index].favorite;

    if (comic[index].favorite) {
      setFavoriteComics([...favoriteComics, id]);
    } else {
      const ids = favoriteComics.filter((data) => data !== id);
      setFavoriteComics(ids);
    }
    setComics(comic);
  };

  const handleNextPage = (offset: number) => {
    getComics(offset);
  };

  const handlePreviusPage = (offset: number) => {
    getComics(offset);
  };

  const handlesearchComics = (data: string) => {
    setSearch(data);
  };

  useEffect(() => {
    getComics(offset, search);
  }, [offset, search]);

  return (
    <ContextComics.Provider
      value={{
        loading,
        comics,
        favoriteComics,
        handleFavorite,
        handleNextPage,
        handlePreviusPage,
        handlesearchComics,
        offset,
      }}
    >
      {children}
    </ContextComics.Provider>
  );
};

export const useMarvelComics = () => {
  const context = useContext(ContextComics);

  return context;
};
