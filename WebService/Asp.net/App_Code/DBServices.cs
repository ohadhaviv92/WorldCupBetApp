using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DBServices
/// </summary>
public static class DBServices
{

    static string StrCon = ConfigurationManager.ConnectionStrings["LIVEDNS"].ConnectionString;

    //    static string StrCon =
    //@"Data Source=DESKTOP-I84F5L4\SQLEXPRESS;Initial Catalog = WorldCupBet; Integrated Security = True";


    static SqlConnection con = new SqlConnection(StrCon);
    static SqlCommand command = new SqlCommand();
    static SqlDataReader reader;

    public static User Login(string userName, string pass)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userName", userName));
            command.Parameters.Add(new SqlParameter("@Pass", pass));
            
            reader = command.ExecuteReader();
            if (reader.Read())
            {
                return new User(int.Parse(reader["userID"].ToString()), reader["userName"].ToString(), reader["pass"].ToString(), reader["firstName"].ToString(), reader["lastName"].ToString(), reader["email"].ToString(), reader["picture"].ToString());
            }
            reader.Close();
            
           
        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }

    public static bool Register(string userName, string pass, string firstName, string lastName, string email, string base64 ,string imgName)
    {

        string imgRef;
        if (base64 != "")
        {
            File.WriteAllBytes(HttpContext.Current.Server.MapPath(@"~/images/" + imgName), Convert.FromBase64String(base64));
            imgRef = @"http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/images/" + imgName;
        }
        else
        {
            if(email == "facebook")
            {
                imgRef = imgName;
            }
            else
            imgRef = "";
        }
        


        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "SetNewUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userName", userName));
            command.Parameters.Add(new SqlParameter("@pass", pass));
            command.Parameters.Add(new SqlParameter("@firstName", firstName));
            command.Parameters.Add(new SqlParameter("@lastName", lastName));
            command.Parameters.Add(new SqlParameter("@email", email));
            command.Parameters.Add(new SqlParameter("@picture", imgRef));

            reader = command.ExecuteReader();
            if (reader.RecordsAffected!=-1)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }



    public static List<Game> GetIncomingGames(int mode)
    {
        try
        {
            con.Open();
            command.Connection = con;
            
         
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetIncomingGames";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@mode", mode));
            reader = command.ExecuteReader();
            List<Game> list= new List<Game>();
            while (reader.Read())
            {
                list.Add(new Game(  
                                 int.Parse(reader["gameID"].ToString()),
                                              reader["dateOfGame"].ToString(),
                                               reader["timeOfGame"].ToString(),
                                          int.Parse(reader["teamID"].ToString()),
                               reader["teamName"].ToString(),
                                reader["picture"].ToString(),
                              int.Parse(reader["Score"].ToString())
                    ));
            }
            return list;
           
        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }


    public static List<Game> GetIncomingGames2(int mode)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetIncomingGames2";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@mode", mode));
            reader = command.ExecuteReader();
            List<Game> list = new List<Game>();
            while (reader.Read())
            {
                list.Add(new Game(
                                 int.Parse(reader["gameID"].ToString()),
                                              reader["dateOfGame"].ToString(),
                                               reader["timeOfGame"].ToString(),
                                          int.Parse(reader["teamID"].ToString()),
                               reader["teamName"].ToString(),
                                reader["picture"].ToString(),
                              int.Parse(reader["Score"].ToString())
                    ));
            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }


    public static List<Game> GetGamesAndResultForUser2(int userID)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetGamesAndResultForUser2";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            reader = command.ExecuteReader();
            List<Game> list = new List<Game>();
            while (reader.Read())
            {
               
                    list.Add(new Game(
                                     int.Parse(reader["gameID"].ToString()),
                                                  reader["dateOfGame"].ToString(),
                                                   reader["timeOfGame"].ToString(),
                                              int.Parse(reader["teamID"].ToString()),
                                   reader["teamName"].ToString(),
                                    reader["picture"].ToString(),
                                  int.Parse(reader["Score"].ToString()),
                                  int.Parse(reader["betScore"].ToString())
                        ));
                
            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }



    public static bool UpdateUserBet(int userID, int gameID, int homeTeamID, int awayTeamID, int homeTeamBet, int awayTeamBet)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "UpdateUserBet";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            command.Parameters.Add(new SqlParameter("@gameID", gameID));
            command.Parameters.Add(new SqlParameter("@homeTeamID", homeTeamID));
            command.Parameters.Add(new SqlParameter("@awayTeamID", awayTeamID));
            command.Parameters.Add(new SqlParameter("@homeTeamBet", homeTeamBet));
            command.Parameters.Add(new SqlParameter("@awayTeamBet", awayTeamBet));

            reader = command.ExecuteReader();
            if (reader.RecordsAffected == 2)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }

    public static List<Player> GetScorerList(int mode)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetScorerList";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@mode", mode));

            reader = command.ExecuteReader();
            List<Player> list = new List<Player>();
            while (reader.Read())
            {

                list.Add(new Player(
                                 int.Parse(reader["playerID"].ToString()),
                                              reader["playerName"].ToString(),
                                               reader["picture"].ToString(),
                                          int.Parse(reader["scoreBet"].ToString())
                
                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }




    public static List<Team> GetTeamList(int mode)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetTeamList";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@mode", mode));

            reader = command.ExecuteReader();
            List<Team> list = new List<Team>();
            while (reader.Read())
            {

                list.Add(new Team(
                                 int.Parse(reader["teamID"].ToString()),
                                              reader["teamName"].ToString(),
                                               reader["picture"].ToString(),
                                          int.Parse(reader["scoreBet"].ToString())

                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }

    public static SpeicelBet GetSpeicelBetForUser(int userID)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetSpeicelBetForUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            

            reader = command.ExecuteReader();
            if (reader.Read())
            {
                return new SpeicelBet(int.Parse(reader["userID"].ToString()), reader["teamName"].ToString(), reader["picture"].ToString(), reader["playerName"].ToString(), reader["playerPicture"].ToString());
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }


    public static bool UpdateScorerBetForUser(int userID, int playerID)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "UpdateScorerBetForUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            command.Parameters.Add(new SqlParameter("@playerID", playerID));
        

            reader = command.ExecuteReader();
            if (reader.RecordsAffected == 1)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }


    public static bool UpdateTeamBetForUser(int userID, int teamID)
    {
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "UpdateTeamBetForUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            command.Parameters.Add(new SqlParameter("@teamID", teamID));


            reader = command.ExecuteReader();
            if (reader.RecordsAffected == 1)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }


    public static List<Game> GetBetsForUser(int userID)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetBetsForUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            reader = command.ExecuteReader();
            List<Game> list = new List<Game>();
            while (reader.Read())
            {

                list.Add(new Game(
                                 int.Parse(reader["gameID"].ToString()),
                                              reader["dateOfGame"].ToString(),
                                               reader["timeOfGame"].ToString(),
                                          int.Parse(reader["teamID"].ToString()),
                               reader["teamName"].ToString(),
                                reader["picture"].ToString(),
                              int.Parse(reader["Score"].ToString()),
                              int.Parse(reader["betScore"].ToString()),
                               int.Parse(reader["finalScore"].ToString())
                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }



    public static bool UpdateScoreOfGame(int gameID, int homeTeamID, int awayTeamID, int homeTeamScore, int awayTeamScore)
    {
        try
        {
            con.Close();
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "UpdateScoreOfGame";
            command.Parameters.Clear();

            command.Parameters.Add(new SqlParameter("@gameID", gameID));
            command.Parameters.Add(new SqlParameter("@homeTeamID", homeTeamID));
            command.Parameters.Add(new SqlParameter("@awayTeamID", awayTeamID));
            command.Parameters.Add(new SqlParameter("@homeTeamScore", homeTeamScore));
            command.Parameters.Add(new SqlParameter("@awayTeamScore", awayTeamScore));

            reader = command.ExecuteReader();
            if (reader.RecordsAffected != 0)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }


    public static List<Group> AllGroupsForUser(int userID)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "AllGroupsForUser";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@userID", userID));
            reader = command.ExecuteReader();
            List<Group> list = new List<Group>();
            while (reader.Read())
            {

                list.Add(new Group(
                                 int.Parse(reader["groupID"].ToString()),
                                              reader["groupName"].ToString(),
                                               reader["startDate"].ToString(),
                                        reader["picture"].ToString()


                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }




    public static bool AddGroup(string groupName, int userID, string base64, string imgName)
    {

        string imgRef;
        if (base64 != "")
        {
            File.WriteAllBytes(HttpContext.Current.Server.MapPath(@"~/images/" + imgName), Convert.FromBase64String(base64));
            imgRef = @"http://185.60.170.14/plesk-site-preview/ruppinmobile.ac.il/site03/images/" + imgName;
        }
        else
        {
            
                imgRef = "";
        }
        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "AddGroup";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@groupName", groupName));
            command.Parameters.Add(new SqlParameter("@userID", userID));
            command.Parameters.Add(new SqlParameter("@picture", imgRef));


            reader = command.ExecuteReader();
            if (reader.RecordsAffected != -1)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }



    public static List<User> GetAllUsersInSpecGroup(int groupID)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetAllUsersInSpecGroup";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@groupID", groupID));
            reader = command.ExecuteReader();
            List<User> list = new List<User>();
            while (reader.Read())
            {

                list.Add(new User(
                                 int.Parse(reader["userID"].ToString()),
                                              reader["firstName"].ToString(),
                                               reader["lastName"].ToString(),
                                        reader["picture"].ToString(),
                                                int.Parse(reader["totalScore"].ToString()),
                                               reader["playerName"].ToString(),
                                        reader["teamName"].ToString()

                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }


    public static List<User> GetAllUsers(int mode)
    {
        try
        {
            con.Open();
            command.Connection = con;


            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "GetAllUsers";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@mode", mode));
            reader = command.ExecuteReader();
            List<User> list = new List<User>();
            while (reader.Read())
            {

                list.Add(new User(
                                 int.Parse(reader["userID"].ToString()),
                                              reader["userName"].ToString(),
                                               reader["pass"].ToString(),
                                       
                               reader["firstName"].ToString(),
                                reader["lastName"].ToString(),
                                 reader["email"].ToString(),
                                reader["picture"].ToString()
                    ));

            }
            return list;

        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return null;
    }



    public static bool AddUserToGroup(int groupID, int userID)
    {

        try
        {
            con.Open();
            command.Connection = con;
            command.CommandType = CommandType.StoredProcedure;

            command.CommandText = "AddUserToGroup";
            command.Parameters.Clear();
            command.Parameters.Add(new SqlParameter("@groupID", groupID));
            command.Parameters.Add(new SqlParameter("@userID", userID));
      


            reader = command.ExecuteReader();
            if (reader.RecordsAffected != -1)
            {
                return true;
            }
            reader.Close();


        }
        catch (Exception e)
        {
            File.AppendAllText("log.txt", e.Message);
        }
        finally
        {
            if (con.State == ConnectionState.Open)
            {
                reader.Close();
                con.Close();
            }
        }
        return false;
    }


}