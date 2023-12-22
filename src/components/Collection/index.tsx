import { CollectionItem } from "@components";
import { StyledCollection } from "./styles";

const Collection = () => {
  return (
    <StyledCollection className="flex flex-row flex-wrap justify-start">
      <CollectionItem color="#00FF00" selected={true} />
      <CollectionItem color="#FF0000" />
      <CollectionItem color="#FFFF00" />
      <CollectionItem color="#FFFFF0" />
      <CollectionItem />
    </StyledCollection>
  );
};

export default Collection;
