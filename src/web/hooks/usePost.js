import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, getPostBySlug } from "../../shared/api/post.api";
import { queryParamsBuilder } from "../../shared/utils/utils.js";

// Lấy danh sách bài viết
export const useFetchPosts = (params) => {
    const paramsBuilder = queryParamsBuilder(params);
    return useQuery({
        queryKey: ["posts", paramsBuilder],
        queryFn: () => getPosts(paramsBuilder),
        staleTime: Infinity
    })
}

// Lấy chi tiết bài viết
export const useFetchPost = (slug) => {
    return useQuery({
        queryKey: ["postSlug", slug],
        queryFn: () => getPostBySlug(slug),
        staleTime: Infinity,
        enabled: !!slug
    })
}