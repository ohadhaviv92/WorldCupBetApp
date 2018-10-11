using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Team
/// </summary>
public class Team
{

    public int teamID { get; set; }
    public string teamName { get; set; }
    public string picture { get; set; }
    public int scoreBet { get; set; }


    public Team(int TeamID, string TeamName, string Picture, int ScoreBet)
    {
        teamID = TeamID;
        teamName = TeamName;
        picture = Picture;
        scoreBet = ScoreBet;
    }
}