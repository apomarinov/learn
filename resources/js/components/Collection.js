import React from 'react';
import {useRouteMatch, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import GridViewer from "./GridViewer";
import {getCollection} from "../actions/collections";

export default function Collection() {
    const match = useRouteMatch();
    const {collection: slug} = useParams();
    const collection = useSelector(state => state.collections.current);
    if (!collection) {
        useDispatch()(getCollection(slug));
    }
    return (
        <div>
            {collection && (
                <GridViewer
                    items={collection.books}
                    baseUrl={match.url}
                    urlResource={'books'}
                />
            )}
        </div>
    );
}

