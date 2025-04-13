import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card>
        <Skeleton
          height="200px" // placeholder for image
        />
        <CardBody>
          <SkeletonText // placeholder for text
          />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
