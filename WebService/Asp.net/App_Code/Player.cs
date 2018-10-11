using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Player
/// </summary>
public class Player
{

    public int playerID { get; set; }
    public string playerName { get; set; }
    public string picture { get; set; }
    public int scoreBet { get; set; }


    public Player(int PlayerID, string PlayerName, string Picture, int ScoreBet)
    {
        playerID = PlayerID;
        playerName = PlayerName;
        picture = Picture;
        scoreBet = ScoreBet;

    }
}