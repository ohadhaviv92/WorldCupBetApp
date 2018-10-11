
/*
Use Master
GO
Drop Database Project
GO
*/

go

CREATE DATABASE WorldCupBet  
ON (NAME = 'Project_Data', 
    FILENAME = 'C:\WorldCupBet\sql\T_Project_Data.MDF' , 
    SIZE = 10, 
    FILEGROWTH = 30%) 
LOG ON (NAME = 'Project_Log', 
        FILENAME = 'C:\WorldCupBet\sql\T_Project_Log.LDF' ,
        SIZE = 10, 
        FILEGROWTH = 30%)
COLLATE Hebrew_CI_AS
GO




Use WorldCupBet
GO


create TABLE TbUsers (
userID int identity(1,1) NOT NULL PRIMARY KEY,
	userName varchar(30) NOT NULL,
	pass varchar(max) NOT NULL,
	firstName nvarchar(50),
	lastName nvarchar(50),
	email nvarchar(50),
	picture varchar(max)
    
);

CREATE TABLE TbGames (
	gameID int identity(1,1) NOT NULL PRIMARY KEY,
	dateOfGame date NOT NULL,
	timeOfGame time NOT NULL,
 
);



CREATE TABLE TbTeams (
	teamID int identity(1,1) NOT NULL PRIMARY KEY,
	teamName nvarchar(50) NOT NULL,
	picture varchar(max) ,
	scoreBet int 
	);
	

	CREATE TABLE  TbScorer
	(
	playerID  int identity(1,1) NOT NULL PRIMARY KEY,
	playerName nvarchar(50) NOT NULL,
	picture varchar(max) ,
	scoreBet int 
	);

CREATE TABLE TbTeamInGame (
	gameID int  FOREIGN KEY REFERENCES TbGames(gameID),
	teamID int FOREIGN KEY REFERENCES TbTeams(teamID),
	Score int ,
	PRIMARY KEY(gameID,teamID)
);

create table TbGroup (
	groupID int identity(1,1) PRIMARY KEY,
	groupName nvarchar(50) ,
	startDate date ,
	picture varchar(max) 
	
);

create table TbUsersInGroup (
	groupID int FOREIGN KEY REFERENCES TbGroup(groupID ),
	userID int FOREIGN KEY REFERENCES TbUsers(userID),
	PRIMARY KEY(groupID , userID )
	
);





create table TbUserBet (
   userID int FOREIGN KEY REFERENCES TbUsers(userID),
   gameID int  FOREIGN KEY REFERENCES TbGames(gameID),
   teamID int FOREIGN KEY REFERENCES TbTeams(teamID),
   betScore int
   PRIMARY KEY(userID,gameID,teamID)
)

create table TbUserScore (
 userID int FOREIGN KEY REFERENCES TbUsers(userID),
 gameID int  FOREIGN KEY REFERENCES TbGames(gameID),
 Score int
   PRIMARY KEY(userID,gameID)
)


create table TbSpeicelBet (
userID int FOREIGN KEY REFERENCES TbUsers(userID),
playerID  int FOREIGN KEY REFERENCES TbScorer(playerID),
teamID  int FOREIGN KEY REFERENCES TbTeams(teamID)
)






Set DateFormat dmy
GO


INSERT [dbo].[TbUsers] (userName, pass, firstName, lastName, email, picture) Values (111,123,N'אוהד',N'חביב','ohadhaviv@gmail.com','pic1.jpg')
INSERT [dbo].[TbUsers] (userName, pass, firstName, lastName, email, picture) Values (222,123,N'ניסים',N'חביב','nisimhaviv@gmail.com','pic1.jpg')
GO

INSERT [dbo].[TbGroup] (grouName, startDate,picture) Values (N'הימורים נתניה','12/06/2018','group1')
go



INSERT [dbo].[TbUsersInGroup] (groupID, userID, totalScore,teamIDBet,playerIDBet) values (1,1,0,-1,-1)
INSERT [dbo].[TbUsersInGroup] (groupID, userID, totalScore,teamIDBet,playerIDBet) values (1,2,0,-1,-1)
go

INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'אגוארו','aguero',6)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'אנדרה סילבה','andre_silva',10)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'דייגו קוסטה','costa',8)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'קוטיניו','aguero',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'קבאני','coutinho',8)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'דמבלה','dembele',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'דריו בנדטו','drio',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'דיבאלה','dybala',12)

INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'פירמינו','firimno',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'גריזמן','grizman',4)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'היגוואין','higuain',10)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'הזארד','hzard',10)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'איקארדי','icardi',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'חסוס','jesus',6)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'הארי קיין','kaien',4)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'לקאזט','lacazet',10)

INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'לוקאקו','lukaku',6)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'מרטנס','mertens',10)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'לבנדובסקי','levandowski',8)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'רונאלדו','ronaldo',4)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'סלאח','salah',6)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'וארדי','vardi',12)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'זירו','ziru',10)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'ורנר','warner',6)
INSERT [dbo].[TbScorer] (playerName,picture,scoreBet) values (N'אחר','other',2)
go


INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'ארגנטינה','Argentina',4)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'ברזיל','Brazil',4)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'גרמניה','Germany',4)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'צרפת','France',4)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'בלגיה','Belgium',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'פורטוגל','Portugal',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'רוסיה','Russia',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'ערב הסעודית','Saudia_Arabia',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'מצריים','Egypt',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'אורגוואי','Orugwai',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'מרוקו','Marroco',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'איראן','Iran',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'ספרד','Spain',4)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'אוסטרליה','Ausrelia',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'איסלנד','Island',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'פרו','Peru',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'דנמרק','Denemark',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'קרואטיה','Crotia',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'ניגריה','Nigeria',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'קוסטה ריקה','CostaRica',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'סרביה','Serbia',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'מקסיקו','Mexico',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'שוויץ','Swiss',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'שוודיה','Swiden',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'קוריאה הדרומית','South_Korea',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'פנמה','Panama',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'תוניסיה','Tunisya',15)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'אנגליה','England',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'קולומביה','Colombia',6)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'יפן','Japan',10)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'פולין','Poland',8)
INSERT [dbo].[TbTeams] ([teamName],[picture],[scoreBet]) Values(N'סנגל','Senegal',10)
 GO

   INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('05-07-2018' , '18:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('06-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('06-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('06-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('07-07-2018' , '13:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('07-07-2018' , '16:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('07-07-2018' , '19:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('07-07-2018' , '22:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('08-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('08-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('08-07-2018' , '21:00')

  
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('09-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('09-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('09-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('10-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('10-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('10-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('11-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('11-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('11-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('12-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('12-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('12-07-2018' , '21:00')

    INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('13-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('13-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('13-07-2018' , '21:00')

    INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('14-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('14-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('14-07-2018' , '21:00')

    INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('15-07-2018' , '15:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('15-07-2018' , '18:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('15-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('16-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('16-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('16-07-2018' , '21:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('16-07-2018' , '21:00')



  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('17-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('17-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('17-07-2018' , '21:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('17-07-2018' , '21:00')


  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('18-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('18-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('18-07-2018' , '21:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('18-07-2018' , '21:00')

  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('19-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('19-07-2018' , '17:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('19-07-2018' , '21:00')
  INSERT [dbo].[TbGames] (dateOfGame, timeOfGame) Values ('19-07-2018' , '21:00')


  GO
  
  
   ---סיבוב 1
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (1,7,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (1,8,0)

  INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (2,9,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (2,10,0)

   INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (3,11,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (3,12,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (4,6,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (4,13,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (5,4,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (5,14,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (6,1,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (6,15,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (7,16,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (7,17,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (8,18,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (8,19,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (9,20,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (9,21,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (10,3,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (10,22,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (11,2,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (11,23,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (12,24,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (12,25,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (13,5,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (13,26,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (14,27,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (14,28,0)

       INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (15,29,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (15,30,0)

        INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (16,31,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (16,32,0)

   ---סיבוב 2
    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (17,7,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (17,9,0)

  INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (18,6,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (18,11,0)

   INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (19,10,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (19,8,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (20,12,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (20,13,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (21,17,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (21,14,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (22,4,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (22,16,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (23,1,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (23,18,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (24,2,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (24,20,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (25,19,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (25,15,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (26,21,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (26,23,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (27,27,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (27,5,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (28,22,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (28,25,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (29,3,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (29,24,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (30,28,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (30,26,0)

       INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (31,30,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (31,32,0)

        INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (32,31,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (32,29,0)


    ---סיבוב 3
    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (33,10,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (33,7,0)

  INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (34,8,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (34,9,0)

   INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (35,12,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (35,6,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (36,13,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (36,11,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (37,4,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (37,17,0)

    INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (38,14,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (38,16,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (39,1,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (39,19,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (40,15,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (40,18,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (41,25,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (41,3,0)

     INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (42,22,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (42,24,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (43,2,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (43,21,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (44,20,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (44,23,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (45,30,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (45,31,0)

      INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (46,32,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (46,29,0)

       INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (47,5,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (47,28,0)

        INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (48,26,0)
 INSERT  [dbo].[TbTeamInGame] (gameID, teamID, Score)  Values (48,27,0)
 GO


 GO

  INSERT  [dbo].[TbGroup] (grouName, [startDate])  Values (N'רופין','30-05-2018')
  INSERT  [dbo].[TbGroup] (grouName, [startDate])  Values (N'החברים של מסי','29-05-2018')
 GO


 INSERT [dbo].[TbUsersInGroup] (groupID, userID) values (1,1)
  INSERT [dbo].[TbUsersInGroup] (groupID, userID) values (1,2)

	 GO
	 
	 
	 
INSERT [dbo].[TbSpeicelBet] (userID, playerID, teamID) values (1,4,7)
go


create proc GetUser
@userName varchar(max),
@pass varchar(max)
as
SELECT       *
FROM            [dbo].TbUsers
WHERE        (userName = @userName) AND (pass = @pass)
go


exec GetUser '222' , '123'
go


create proc SetNewUser
	@userName varchar(30) ,
	@pass varchar(max) ,
	@firstName nvarchar(50),
	@lastName nvarchar(50),
	@email nvarchar(50),
	@picture varchar(max)
as
if not exists (SELECT        userName
FROM            [dbo].TbUsers
WHERE        (userName = @userName))
begin 
INSERT  [dbo].[TbUsers] (userName, pass, firstName, lastName, email, picture) Values (@userName, @pass, @firstName, @lastName, @email, @picture)
end
else 
begin 
print 'משתמש קיים'
return 0 
end
go

exec SetNewUser 333,123,N'עמית',N'פרץ','amit@gmail.com','pic1.jpg'
go


create proc GetAllUsersInSpecGroup 
@groupID int 
as 
SELECT        TOP (100) PERCENT [dbo].TbUsersInGroup.groupID, [dbo].TbUsers.firstName, [dbo].TbUsers.lastName
FROM            [dbo].TbUsers INNER JOIN
                         [dbo].TbUsersInGroup ON [dbo].TbUsers.UserID = [dbo].TbUsersInGroup.UserID
WHERE        ([dbo].TbUsersInGroup.groupID = @groupID)
go 

exec  GetAllUsersInSpecGroup 1
go


create proc GetIncomingGames
@mode int
as
SELECT         dbo.TbTeams.teamName, dbo.TbTeamInGame.teamID, dbo.TbTeamInGame.Score, dbo.TbGames.dateOfGame, dbo.TbGames.timeOfGame, dbo.TbGames.gameID,[dbo].TbTeams.picture
FROM            [dbo].TbGames INNER JOIN
                         [dbo].TbTeamInGame ON [dbo].TbGames.gameID = [dbo].TbTeamInGame.gameID INNER JOIN
                         [dbo].TbTeams ON [dbo].TbTeamInGame.teamID = [dbo].TbTeams.teamID
WHERE        ([dbo].TbGames.dateOfGame > CONVERT(date, GETDATE()))
go

EXEC GetIncomingGames 1
GO

create proc SetScoreForUser
@userID varchar(30) 
as
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values (@userID,1,7,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,1,8,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,2,9,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,2,10,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,3,11,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,3,12,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,4,6,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,4,13,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,5,4,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,5,14,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,6,1,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,6,15,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,7,16,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,7,17,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,8,18,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,8,19,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,9,20,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,9,21,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,10,3,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,10,22,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,11,2,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,11,23,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,12,24,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,12,25,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,13,5,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,13,26,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,14,27,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,14,28,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,15,29,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,15,30,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,16,31,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,16,32,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,17,7,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,17,9,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,18,6,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,18,11,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,19,8,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,19,10,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,20,12,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,20,13,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,21,14,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,21,17,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,22,4,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,22,16,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,23,1,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,23,18,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,24,2,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,24,20,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,25,15,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,25,19,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,26,21,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,26,23,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,27,5,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,27,27,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,28,22,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,28,25,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,29,3,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,29,24,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,30,26,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,30,28,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,31,30,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,31,32,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,32,29,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,32,31,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,33,7,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,33,10,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,34,8,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,34,9,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,35,6,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,35,12,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,36,11,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,36,13,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,37,4,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,37,17,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,38,14,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,38,16,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,39,1,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,39,19,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,40,15,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,40,18,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values(@userID,41,3,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,41,25,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,42,22,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,42,24,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,43,2,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,43,21,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,44,20,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,44,23,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore)values (@userID,45,30,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,45,31,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,46,29,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,46,32,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,47,5,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,47,28,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,48,26,-1)
insert [dbo].[TbUserBet] (userID, gameID, teamID,betScore) values(@userID,48,27,-1)
go

EXEC SetScoreForUser 1


create proc GetGamesAndResultForUser2
@userID int
as
SELECT        dbo.TbTeams.teamName, dbo.TbTeamInGame.teamID, dbo.TbTeamInGame.Score, dbo.TbGames.dateOfGame, dbo.TbGames.timeOfGame, dbo.TbGames.gameID, dbo.TbUserBet.betScore,[dbo].TbTeams.picture
FROM            dbo.TbGames INNER JOIN
                         dbo.TbTeamInGame ON dbo.TbGames.gameID = dbo.TbTeamInGame.gameID INNER JOIN
                         dbo.TbTeams ON dbo.TbTeamInGame.teamID = dbo.TbTeams.teamID INNER JOIN
                         dbo.TbUserBet ON dbo.TbGames.gameID = dbo.TbUserBet.gameID AND dbo.TbTeams.teamID = dbo.TbUserBet.teamID
WHERE        (dbo.TbGames.dateOfGame > CONVERT(date, GETDATE()) and dbo.TbUserBet.userID=@userID)
go 

exec GetGamesAndResultForUser2 1






 create proc UpdateUserBet
 @userID varchar(30) ,
 @gameID int ,
 @homeTeamID int ,
 @awayTeamID int ,
 @homeTeamBet int ,
 @awayTeamBet int 
 as
 update [dbo].[TbUserBet] set [betScore] =@homeTeamBet  where [userID]= @userID and [gameID] =@gameID and [teamID]=@homeTeamID
 update [dbo].[TbUserBet] set [betScore] =@awayTeamBet  where [userID]= @userID and [gameID] =@gameID and [teamID]=@awayTeamID
 go

 
 create proc UpdateScoreOfGame
 @gameID int ,
 @homeTeamID int ,
 @awayTeamID int ,
 @homeTeamBet int ,
 @awayTeamBet int 
 as
 update [dbo].[TbTeamInGame] set  [Score]=@homeTeamBet  where [gameID] =@gameID and [teamID]=@homeTeamID
 update [dbo].[TbTeamInGame] set [Score]=@awayTeamBet  where  [gameID] =@gameID and [teamID]=@awayTeamID

 go


 CREATE PROC GetSpeicelBetForUser 
 @userID varchar(max)
 AS
 SELECT        dbo.TbTeams.teamName, dbo.TbScorer.playerName, dbo.TbUsers.userID, dbo.TbTeams.picture, dbo.TbScorer.picture AS playerPicture
FROM            dbo.TbScorer INNER JOIN
                         dbo.TbSpeicelBet ON dbo.TbScorer.playerID = dbo.TbSpeicelBet.playerID INNER JOIN
                         dbo.TbTeams ON dbo.TbSpeicelBet.teamID = dbo.TbTeams.teamID INNER JOIN
                         dbo.TbUsers ON dbo.TbSpeicelBet.userID = dbo.TbUsers.userID
WHERE        (dbo.TbUsers.userID = @userID)
 GO

 exec GetSpeicelBetForUser 1
 

 create proc UpdateScorerBetForUser
 @userID varchar(max),
 @playerID int
 as
 update  [dbo].[TbSpeicelBet] set [playerID]=@playerID where [userID]=@userID
 go

 exec UpdateScorerBetForUser 111,2

  create proc UpdateTeamBetForUser
 @userID varchar(max),
 @teamID int
 as
 update  [dbo].[TbSpeicelBet] set [teamID]=@teamID where [userID]=@userID
 go
  exec UpdateTeamBetForUser 1,1


  create proc GetBetsForUser
@userID varchar(30) 
as
SELECT        dbo.TbTeams.teamName, dbo.TbTeamInGame.teamID, dbo.TbTeamInGame.Score, dbo.TbGames.dateOfGame, dbo.TbGames.timeOfGame, dbo.TbGames.gameID, dbo.TbUserBet.betScore, 
                         dbo.TbTeams.picture, TbTeamInGame_1.Score AS finalScore
FROM            dbo.TbGames INNER JOIN
                         dbo.TbTeamInGame ON dbo.TbGames.gameID = dbo.TbTeamInGame.gameID INNER JOIN
                         dbo.TbTeams ON dbo.TbTeamInGame.teamID = dbo.TbTeams.teamID INNER JOIN
                         dbo.TbUserBet ON dbo.TbGames.gameID = dbo.TbUserBet.gameID AND dbo.TbTeams.teamID = dbo.TbUserBet.teamID INNER JOIN
                         dbo.TbTeamInGame AS TbTeamInGame_1 ON dbo.TbGames.gameID = TbTeamInGame_1.gameID AND dbo.TbTeams.teamID = TbTeamInGame_1.teamID
WHERE        (dbo.TbGames.dateOfGame < CONVERT(date, GETDATE())) AND (dbo.TbUserBet.userID = @userID)
go 

exec GetBetsForUser 1



create proc GetScorerList
@mode int 
as
SELECT       playerID, playerName, picture, scoreBet
FROM            dbo.TbScorer
go





----ניסיון --------------

 alter proc UpdateScoreOfGame
 @gameID int ,
 @homeTeamID int ,
 @awayTeamID int ,
 @homeTeamScore int ,
 @awayTeamScore int 
 as
 update [dbo].[TbTeamInGame] set  [Score]=@homeTeamScore  where [gameID] =@gameID and [teamID]=@homeTeamID
 update [dbo].[TbTeamInGame] set [Score]=@awayTeamScore  where  [gameID] =@gameID and [teamID]=@awayTeamID
DECLARE @cnt int = 1;
 while(@cnt <= (Select Count(*) From [dbo].[TbUsers]))
 BEGIN
 DECLARE @homeTeamScoreBet int =  (select [betScore] from [dbo].[TbUserBet] where [gameID] =  @gameID and [teamID] =  @homeTeamID and  [userID]=@cnt  );
 DECLARE @awayTeamScoreBet int =  (select [betScore] from [dbo].[TbUserBet] where [gameID] =  @gameID and [teamID] = @awayTeamID and  [userID]=@cnt  );
 if (@homeTeamScoreBet=-1 or @awayTeamScoreBet =-1 )
   begin 
   insert   [dbo].[TbUserScore] values (  @cnt ,@gameID ,3) 
   end 
       else if(@homeTeamScore = @homeTeamScoreBet and @awayTeamScore = @awayTeamScoreBet)
       begin
       IF EXISTS(SELECT [Score] from [dbo].[TbUserScore] WHERE [userID] =@cnt AND  [gameID]= @gameID )
       BEGIN
       UPDATE  [dbo].[TbUserScore] SET  [Score] =3 where  [userID] = @cnt AND [gameID] =@gameID 
       END 
       ELSE 
       BEGIN
       insert   [dbo].[TbUserScore] values (  @cnt ,@gameID ,3) 
       END 
       end
           else if (@homeTeamScore > @awayTeamScore and @homeTeamScoreBet > @awayTeamScoreBet  or @awayTeamScore > @homeTeamScore and @awayTeamScoreBet > @homeTeamScoreBet or @homeTeamScore = @awayTeamScore and @homeTeamScoreBet = @awayTeamScoreBet )
           begin
           IF EXISTS(SELECT [Score] from [dbo].[TbUserScore] WHERE [userID] =@cnt AND  [gameID]= @gameID )
           BEGIN
           UPDATE  [dbo].[TbUserScore] SET  [Score] =1 where  [userID] = @cnt AND [gameID] =@gameID 
           END 
           ELSE 
           BEGIN
           insert   [dbo].[TbUserScore] values (  @cnt ,@gameID ,1) 
           END    
           end
		       else 
			      begin
                      IF EXISTS(SELECT [Score] from [dbo].[TbUserScore] WHERE [userID] =@cnt AND  [gameID]= @gameID )
                      BEGIN
                      UPDATE  [dbo].[TbUserScore] SET  [Score] =0 where  [userID] = @cnt AND [gameID] =@gameID 
                      END 
                      ELSE 
                      BEGIN
                      insert   [dbo].[TbUserScore] values (  @cnt ,@gameID ,0) 
                      END    
                      end

  set @cnt=@cnt+1;    
END
 go
 --------------


create proc AddGroup
@grouName nvarchar(50) ,
@userID int 
as	
insert [dbo].[TbGroup]  (grouName, startDate)  Values (@grouName,CONVERT(date, GETDATE())) 
insert [dbo].[TbUsersInGroup] Values ((Select Count(*) From [dbo].[TbGroup]),@userID)
go


create proc AllGroupsForUser
@userID int 
as
SELECT       dbo.TbGroup.groupID, dbo.TbGroup.groupName, dbo.TbGroup.startDate, dbo.TbUsers.userID
FROM            dbo.TbGroup INNER JOIN
                         dbo.TbUsersInGroup ON dbo.TbGroup.groupID = dbo.TbUsersInGroup.groupID INNER JOIN
                         dbo.TbUsers ON dbo.TbUsersInGroup.userID = dbo.TbUsers.userID
WHERE        (dbo.TbUsers.userID = @userID)
go