import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL_PUBLIC } from "../constants";
import { getAllGists, getGistsFailure, getGistsRequest, getGistsSuccess } from "../constants/getGists";
import { selectGists, selectGistsError, selectGistsLoading } from "../store/selectors/gists";
/*
export const GistsList = () => {
    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);
    console.log(gists);

    const requestGists = () => {
        dispatch(getAllGists());
    };
    

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
            <h3>Error</h3>
            <button onClick={requestGists}>Retry</button>
            </>
        );
    }

    return <ul>{gists.map(renderGist)}</ul>
};
*/

export const GistsList = () => {
    const [gists, setGists] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(gists);

    const requestGists = async () => {
        setLoading(true);

        try {
            const response = await fetch (API_URL_PUBLIC);

            if (!response.ok) {
                throw new Error(`Request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            setGists(result);
        } catch (err) {
            setError(true);
            console.warn(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        requestGists();
    }, []);
    
    const renderGist = useCallback(
        (gist) => <li key={gist.id}>{gist.description}</li>,
        []
    );

    if (error) {
        return (
            <div className="error">
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </div>
        );
    }
    
    if (loading) {
        return <CircularProgress className="gistsloader"/>;
    }

    return <ul className="gists">{ gists.map(renderGist) }</ul>
}
