using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for SpeicelBet
/// </summary>
public class SpeicelBet
{

    public int userID { get; set; }
    public string teamName { get; set; }
    public string picture { get; set; }
    public string playerName { get; set; }
    public string playerPicture { get; set; }


    public SpeicelBet(int UserID, string TeamName, string Picture, string PlayerName, string PlayerPicture)
    {
        userID = UserID;
        teamName = TeamName;
        picture = Picture;
        playerName = PlayerName;
        playerPicture = PlayerPicture;



    }
}