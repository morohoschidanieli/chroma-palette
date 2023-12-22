import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { StyledAddCollectionItem, StyledColorCollectionItem } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ICollectionType {
  color?: string;
  selected?: boolean;
}

const CollectionItem = ({ color, selected = false }: ICollectionType) => {
  return (
    <>
      {color ? (
        <StyledColorCollectionItem
          className="rounded h-10 w-10 m-1"
          color={color}
          selected={selected}
        />
      ) : (
        <StyledAddCollectionItem
          title="Add"
          className="flex justify-center items-center bg-neutral-600 text-neutral-300 rounded h-10 w-10 p-1 m-1"
        >
          <FontAwesomeIcon icon={faPlus} />
        </StyledAddCollectionItem>
        // <div className="bg-red-600 rounded h-10 w-10 m-1" />
      )}

      {/* <div className="bg-red-600 rounded h-10 w-10 m-1" />
      <div className="bg-red-600 rounded h-10 w-10 m-1" />
      <div className="bg-red-600 rounded h-10 w-10 m-1" /> */}
      {/* <div className="bg-red-600 rounded h-10 w-10 m-1" />
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" />{" "}
      <div className="bg-red-600 rounded h-10 w-10 m-1" /> */}
    </>
  );
};

export default CollectionItem;
