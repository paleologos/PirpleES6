// Favorite song homework assignment #1
/* -Song(object)
        -name of the song (string)
        -artist (string)
        -genre (string)
        -duration seconds (number)
        -year (number)
        -popular (boolean)
        -rating (number of 10)
        -youtube URL(string)
        -album name(string)
        -album year
        -album genre(s) (array)
        -album tracks(array)
*/

// Song object constructor

function songConstructor(songName, artist, songGenre, songDuration, songYear, isPopular, rating, youtubeURL, albumName, albumYear){
    this.songName= songName;
    this.artist= artist;
    this.songGenre= songGenre;
    this.songDuration= songDuration;
    this.songYear=songYear;
    this.isPopular=isPopular;
    this.rating=rating
    this.youtubeURL= youtubeURL;
    this.albumName= albumName;
    this.albumYear= albumYear;
    this.getSongData= function(){
        return("Favorite song data:\n"+">Song name: "+this.songName+" \n"+">Song artist: "+this.artist+" \n"+">Song genre : "+this.songGenre+" \n"
        +">Duration(sec): "+this.songDuration+" \n"+">Song year: "+this.songYear+" \n"+">Popular: "+this.isPopular+" \n"+">Rating: "+this.rating+" /10\n"
        +">YT URL: "+this.youtubeURL+" \n"+">Album: "+this.albumName+" \n"+">Album Year: "+this.albumYear+" \n");
        
    }


}

//Creating song object using song constructor

var favSong1= new songConstructor("Victory","Two steps from hell", "Epic", 328, 2015, true, 9, "https://www.youtube.com/watch?v=hKRUPYrAQoE", "Battlecry", 2015);
var favSong2= new songConstructor("Empire of Angels (Sun)","Thomas Bergersen", "Epic", 316, 2015, true, 10, "https://www.youtube.com/watch?v=izsjRpcgfmk", "none /single", 2015);

//Creating an Array of favorite songs
var dataArray=[];
// adding favorite songs to an Array
dataArray.push(favSong1.getSongData(), favSong2.getSongData());

// Printing second favorite song

console.log(dataArray[0]);