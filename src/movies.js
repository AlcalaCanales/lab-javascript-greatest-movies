// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(movies){
    const directors = movies.map(function(movie){
        return movie.director
    })
    return directors 
}





// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies){
    const spielbergMovies =movies.filter(function(movie){
        return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
    })
    const countOfSpielbergMovies = spielbergMovies.length
    return countOfSpielbergMovies
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(movies){
    if (movies.length === 0){
        return 0
    }else {
        const moviesRates = movies
        .map(function (movie) {
            return movie.rate;
          })
        const sumOfMovieRates = moviesRates
        .reduce(function (accumulator, rate, index, list) {
            if (typeof(rate) != 'number'){
                rate = 0
            }
            return accumulator + rate
          }, 0);
        const averageFromRates = Math.round(sumOfMovieRates/moviesRates.length*100)/100 
        return averageFromRates
    }
}


// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(movies){
    const dramaMovies= movies.filter(function(movie) {
        return movie.genre.includes("Drama")
    })
    const averageRateFromDramaMovie = ratesAverage(dramaMovies)
    return averageRateFromDramaMovie;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movies) {
    const moviesByYear = [...movies]
    moviesByYear.sort(function(a,b){   
        if (a.year === b.year){               
            return a.title.localeCompare(b.title);
        }
        return a.year - b.year;       
    });                        
    return moviesByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){  
    const moviesTitles = movies.map(function (movie){
        return movie.title
    });
    moviesTitles.sort();
    const twentyMovies = moviesTitles.slice(0,20);
    return twentyMovies;
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(movies){
    if (movies.length === 0){
        return null
    }else{
        minMovie = movies.reduce(function(prev, curr) {
            return prev.year < curr.year ? prev : curr;
        });
        min = minMovie.year
        
        maxMovie = movies.reduce(function(prev, curr) {
            return prev.year < curr.year ? curr : prev;
        });
        max = maxMovie.year
        
        const yearAverage = {"year":max, "rate":0}
        for (let calYear= min; calYear < max; i++){
            let yearMovies= movies.filter(function(movie) {
                return movie.year == calYear;
            })
            if (yearMovies.length > 0){
                const yearMovieRates = movies
                .map(function (movie) {
                    return movie.rate;
                  })
                const sumOfYearMovieRates = yearMovieRates
                .reduce(function (accumulator, rate) {
                    if (typeof(rate) != 'number'){
                        rate = 0
                    }
                    return accumulator + rate
                  }, 0);


                const averageFromYearMovieRates = sumOfYearMovieRates/yearMovieRates.length

                
                if (averageFromYearMovieRates > yearAverage.rate){
                    yearAverage.rate = averageFromYearMovieRates;
                    yearAverage.year = calYear;
                } 
                else if (averageFromYearMovieRates === yearAverage.rate){
                    if (calYear < yearAverage.year){
                        yearAverage.rate = averageFromYearMovieRates;
                        yearAverage.year = calYear;
                    }
                }
            }

        }
        const bestYear = yearAverage.year 
        return `The best year was ${yearAverage.year} with an average rate of ${yearAverage.rate}`;
    }
}