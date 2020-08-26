import React from 'react';
import { useRouteMatch, useParams } from "react-router-dom";
import { useSelector } from 'react-redux'
import GridViewer from "./GridViewer";

export default function Collection() {
    const match = useRouteMatch();
    const params = useParams();
    const collection = useSelector(state => state.collections.find(c => c.slug == params.collection));
    return (
        <div>
            {collection && (
                <GridViewer
                    items={collection.books}
                    baseUrl={match.url}
                    urlResource={'book'}
                />
            )}
        </div>
    );
}

