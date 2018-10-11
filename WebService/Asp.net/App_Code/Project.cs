using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Serialization;
using System.Web.Services;

/// <summary>
/// Summary description for Project
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class Project : System.Web.Services.WebService
{

    public Project()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }


    [WebMethod]
    public string Login(string userName, string pass)
    {
        User user = DBServices.Login(userName, pass);
        string output = new JavaScriptSerializer().Serialize(user);
        return output;
    }

    [WebMethod]
    public bool Register(string userName, string pass, string firstName, string lastName, string email, string base64, string imgName)
    {


        return DBServices.Register( userName,  pass,  firstName,  lastName,  email,  base64,  imgName);
       
        
    }

    [WebMethod]
    public string GetIncomingGames(int mode)
    {
        List<Game> games = DBServices.GetIncomingGames(mode);
        string output = new JavaScriptSerializer().Serialize(games);
        return output;
    }

    [WebMethod]
    public string GetIncomingGames2(int mode)
    {
        List<Game> games = DBServices.GetIncomingGames2(mode);
        string output = new JavaScriptSerializer().Serialize(games);
        return output;
    }

    [WebMethod]
    public string GetGamesAndResultForUser2(int userID)
    {
        List<Game> games = DBServices.GetGamesAndResultForUser2(userID);
        string output = new JavaScriptSerializer().Serialize(games);
        return output;
    }

    [WebMethod]
    public bool UpdateUserBet(int userID, int  gameID, int  homeTeamID, int awayTeamID, int homeTeamBet, int awayTeamBet)
    {


        return DBServices.UpdateUserBet(userID, gameID, homeTeamID, awayTeamID, homeTeamBet, awayTeamBet);
    }

    [WebMethod]
    public string GetScorerList(int mode)
    {
        List <Player> player = DBServices.GetScorerList(mode);
        string output = new JavaScriptSerializer().Serialize(player);
        return output;
    }


    [WebMethod]
    public string GetTeamList(int mode)
    {
        List<Team> player = DBServices.GetTeamList(mode);
        string output = new JavaScriptSerializer().Serialize(player);
        return output;
    }


    [WebMethod]
    public string GetSpeicelBetForUser(int userID)
    {
        SpeicelBet spec = DBServices.GetSpeicelBetForUser(userID);
        string output = new JavaScriptSerializer().Serialize(spec);
        return output;
    }

    [WebMethod]
    public bool UpdateScorerBetForUser(int userID, int playerID)
    {


        return DBServices.UpdateScorerBetForUser(userID, playerID);
    }


    [WebMethod]
    public bool UpdateTeamBetForUser(int userID, int teamID)
    {


        return DBServices.UpdateTeamBetForUser(userID, teamID);
    }





    [WebMethod]
    public string GetBetsForUser(int userID)
    {
        List<Game> games = DBServices.GetBetsForUser(userID);
        string output = new JavaScriptSerializer().Serialize(games);
        return output;
    }

    [WebMethod]
    public bool UpdateScoreOfGame( int gameID, int homeTeamID, int awayTeamID, int homeTeamScore, int awayTeamScore)
    {


        return DBServices.UpdateScoreOfGame(gameID, homeTeamID, awayTeamID, homeTeamScore, awayTeamScore);
    }


    [WebMethod]
    public string AllGroupsForUser(int userID)
    {
        List<Group> groups = DBServices.AllGroupsForUser(userID);
        string output = new JavaScriptSerializer().Serialize(groups);
        return output;
    }


    [WebMethod]
    public bool AddGroup(string groupName, int userID, string base64, string imgName)
    {


        return DBServices.AddGroup(groupName, userID,base64,  imgName);
    }

    [WebMethod]
    public string GetAllUsersInSpecGroup(int groupID)
    {


        List<User> users = DBServices.GetAllUsersInSpecGroup(groupID);
        string output = new JavaScriptSerializer().Serialize(users);
        return output;
    }


    [WebMethod]
    public string GetAllUsers(int mode)
    {
        List<User> games = DBServices.GetAllUsers(mode);
        string output = new JavaScriptSerializer().Serialize(games);
        return output;
    }


    [WebMethod]
    public bool AddUserToGroup(int groupID, int userID)
    {


        return DBServices.AddUserToGroup(groupID, userID);
    }


}