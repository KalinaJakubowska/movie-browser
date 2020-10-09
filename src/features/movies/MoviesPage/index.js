import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../common/Loading";
import BottomNavbar from "../../BottomNavbar";
import MovieTile from "../../MovieTile";
import {
    selectPopularMovies,
    selectLoading,
    setActivePage,
} from "./moviesSlice";
import { MoviesContainer } from "./styled";
import Header from "./../../../common/Header";
import { usePageParameter } from "../../pageParameters";

const MoviesPage = () => {
    const urlPageNumber = +usePageParameter("page");
    const popularMovies = useSelector(selectPopularMovies);
    const isLoading = useSelector(selectLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setActivePage(urlPageNumber < 1 || urlPageNumber > 500 ? 1 : urlPageNumber));
    }, [])

    return (
        <>
            <Header>Popular movies</Header>

            {isLoading
                ? <Loading />
                : (
                    <>
                        <MoviesContainer>
                            {popularMovies.map(movie =>
                                <MovieTile key={movie.id} movieInfo={movie}></MovieTile>
                            )}
                        </MoviesContainer>
                        <BottomNavbar />
                    </>
                )
            }
        </>
    );
};

export default MoviesPage;