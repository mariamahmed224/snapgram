import { Models } from "appwrite";
import React from "react";
import Loader from "./Loader";
import GridPostList from "./GridPostList";
import { searchPosts } from "@/lib/appwite/api";

type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[];
};

const SearchResults = ({
  isSearchFetching,
  searchedPosts,
}: SearchResultsProps) => {
  if (isSearchFetching) return <Loader />;

  if (searchedPosts && searchedPosts.documents.length > 0) {
    return <GridPostList posts={searchPosts.documents} />;
  }
  return <p className="text-light-4 mt-10 text-center w-full">No result</p>;
};

export default SearchResults;
