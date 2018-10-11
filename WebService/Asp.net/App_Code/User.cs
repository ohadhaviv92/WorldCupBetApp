using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for User
/// </summary>
public class User
{
    public int userID { get; set; }
    public string userName { get; set; }
    public string pass { get; set; }
    public string firstName { get; set; }
    public string lastName { get; set; }
    public string email { get; set; }
    public string picture { get; set; }
    public int totalScore { get; set; }
    public string playerName { get; set; }
    public string teamName { get; set; }


    public User(int UserID, string UserName, string Pass, string FirstName, string LastName, string Email, string Picture)
    {
        userName=UserName;
        pass = Pass;
        firstName = FirstName;
        lastName = LastName;
        email = Email;
        picture = Picture;
        userID=UserID;
    }

    public User(int UserID, string FirstName, string LastName, string Picture, int TotalScore,    string PlayerName ,string TeamName)
    {


        firstName = FirstName;
        lastName = LastName;
        
        picture = Picture;
        userID = UserID;
        totalScore = TotalScore;
        playerName = PlayerName;
       teamName = TeamName;
    }
}