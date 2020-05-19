import { fetchEntries } from "../../../vendor/contentful-client";
import { useEffect, useState, useRef } from "react";
import {
  getPaginationQuery,
  OPTION,
  SKIP_GAP,
} from "../helper/configure-pagination";

const useInfiniteScroll = (initialSkip, initialPosts, initialTotal) => {
  const sentinel = useRef();
  const skip = useRef(initialSkip);
  const [total, setTotal] = useState(initialTotal);
  const [posts, setPosts] = useState(initialPosts);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);

      const { entries, total: Total } = await fetchEntries(
        getPaginationQuery({ skip: skip.current })
      );

      if (entries.length) {
        setPosts((prePosts) => [...prePosts, ...entries]);
      }

      const maxTotal = Math.max(Total, total);
      setTotal(maxTotal);
      skip.current = Math.min(maxTotal, skip.current + SKIP_GAP);

      setIsFetching(false);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        fetchPosts();
      });
    }, OPTION);

    observer.observe(sentinel.current);

    return () => {
      observer.unobserve(sentinel.current);
    };
  }, [total]);

  return { sentinel, posts, isFetching };
};

export default useInfiniteScroll;
