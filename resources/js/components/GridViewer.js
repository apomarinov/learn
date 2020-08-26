import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import { useHistory } from "react-router-dom";

export default function GridViewer(props) {
    const {
        baseUrl,
        urlResource,
        items
    } = props;
    let url = baseUrl;
    if (url === '/') {
        url = '';
    }
    const history = useHistory();

    return (
        <Grid container spacing={3} justify={'center'}>
            {items.map(item => {
                return (
                    <Grid item key={item.id}>
                        <Card
                            title={item.title}
                            image={item.img}
                            onClick={() => history.push(`${url}/${urlResource}/${item.slug}`)}
                        />
                    </Grid>);
            })}
        </Grid>
    );
}

