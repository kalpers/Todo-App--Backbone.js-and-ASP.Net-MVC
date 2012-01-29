using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TodoWebApplication.ExtensionMethods
{
    public static class ExtensionMethods
    {
        ///<summary>
        ///<Description>Extension Methods use to serialize a string object into JSON</Description>
        ///</summary>
        public static string ToJSON(this object obj)
        {
            return (new System.Web.Script.Serialization.JavaScriptSerializer()).Serialize(obj);
        }
        ///<summary>
        ///<Description>Extension Methods use to serialize a string object into JSON with recursion</Description>
        ///</summary>
        public static string ToJSON(this object obj, int recursionDepth)
        {
            return (new System.Web.Script.Serialization.JavaScriptSerializer() { RecursionLimit = recursionDepth }).Serialize(obj);
        }
    }
}