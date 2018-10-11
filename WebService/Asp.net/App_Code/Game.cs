using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Game
/// </summary>
public class Game
{
    public int gameID { get; set; }
    public string dateOfGame { get; set; }
    public string timeOfGame { get; set; }
    public int teamID { get; set; }
    public string teamName { get; set; }
    public string picture { get; set; }
    public int score { get; set; }
    public int betScore { get; set; }
    public int finalScore { get; set; }



    public Game(int GameID, string DateOfGame, string TimeOfGame, int TeamID, string TeamName,string Picture, int Score)
    {
        gameID = GameID;
        dateOfGame = DateOfGame;
        timeOfGame = TimeOfGame;
        teamID = TeamID;
        teamName = TeamName;
        picture = Picture;
        score = Score;
    }

    public Game(int GameID, string DateOfGame, string TimeOfGame, int TeamID, string TeamName, string Picture, int Score, int BetScore)
    {
        gameID = GameID;
        dateOfGame = DateOfGame;
        timeOfGame = TimeOfGame;
        teamID = TeamID;
        teamName = TeamName;
        picture = Picture;
        score = Score;
        betScore = BetScore;
    }

    public Game(int GameID, string DateOfGame, string TimeOfGame, int TeamID, string TeamName, string Picture, int Score, int BetScore,int FinalScore)
    {
        gameID = GameID;
        dateOfGame = DateOfGame;
        timeOfGame = TimeOfGame;
        teamID = TeamID;
        teamName = TeamName;
        picture = Picture;
        score = Score;
        betScore = BetScore;
        finalScore = FinalScore;
    }
}