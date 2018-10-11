using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class Group
{
    public int groupID  { get; set; }
    public string groupName  { get; set; }
    public string startDate { get; set; }
    public string picture { get; set; }

    public Group(int GroupID, string GroupName, string StartDate, string Picture)
    {

        groupID = GroupID;
        groupName = GroupName;
        startDate = StartDate;
        picture = Picture;
    }
}