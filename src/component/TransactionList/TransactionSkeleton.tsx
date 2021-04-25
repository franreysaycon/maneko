import { Stack } from "@chakra-ui/layout"
import { Skeleton } from "@chakra-ui/skeleton"
import React from "react"

const TransactionSkeleton: React.FC = () => (
  <Stack>
    <Skeleton h="80px" opacity={0.1} borderRadius={15} />
    <Skeleton h="80px" opacity={0.1} borderRadius={15} />
    <Skeleton h="80px" opacity={0.1} borderRadius={15} />
    <Skeleton h="80px" opacity={0.1} borderRadius={15} />
  </Stack>
)

export default TransactionSkeleton
