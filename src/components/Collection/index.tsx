import { CollectionItem } from "@components";

interface ICollection {
  children: Array<React.ReactNode>;
}

const Collection = ({ children }: ICollection) => {
  const collectionItemNumber: number = Number(
    import.meta.env.VITE_COLLECTION_NUMBER
  );
  return (
    <div className="flex flex-row flex-wrap justify-start">
      {children.length === collectionItemNumber ? (
        children
      ) : (
        <>
          {children}
          <CollectionItem />
        </>
      )}
    </div>
  );
};

export default Collection;
