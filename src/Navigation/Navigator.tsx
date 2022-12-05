import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import AddNewPost from "../components/post/AddNewPost";
import { PostsList } from "../components/post/PostsList";
import { NoMatchScreen } from "./NoMatchScreen";

const LazyDetailsScreen = React.lazy(
    () => import("../components/post/PostDetails")
);

export const Navigator: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="add-post" element={<Suspense fallback={<></>}><AddNewPost /></Suspense>} />
            <Route
                path="post-details/:id"
                element={
                    <Suspense fallback={<></>}>
                        <LazyDetailsScreen />
                    </Suspense>
                }
            />
            <Route path="*" element={<NoMatchScreen />} />
        </Routes>
    );
};
