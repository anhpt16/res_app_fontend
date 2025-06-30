import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCollection } from "../../shared/api/collection.api.js";
import { queryParamsBuilder } from "../../shared/utils/utils.js";

// Lấy bộ sưu tập
export const useFetchCollection = (params) => {
    const paramsBuilder = queryParamsBuilder(params);
    return useQuery({
        queryKey: ["medias", paramsBuilder],
        queryFn: () => getCollection(paramsBuilder),
        staleTime: Infinity
    })
}
