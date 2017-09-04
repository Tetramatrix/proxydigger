using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using SetProxy;
using System.Runtime.InteropServices;


namespace Proxydigger
{
    static class Program
    {
        [System.Runtime.InteropServices.DllImport("kernel32.dll", CharSet = System.Runtime.InteropServices.CharSet.Unicode, SetLastError = true)]
        [return: System.Runtime.InteropServices.MarshalAs(System.Runtime.InteropServices.UnmanagedType.Bool)]
        static extern bool SetDllDirectory(string lpPathName);

        /// <summary>
        /// The main entry point for the application.
        /// </summary>
        [STAThread]
        static void Main()
        {
            int wsize = IntPtr.Size;
            string libdir = (wsize == 4) ? "x86" : "x64";
            string appPath = System.IO.Path.GetDirectoryName(Application.ExecutablePath);
            SetDllDirectory(System.IO.Path.Combine(appPath, libdir));

            //WinInetInterop.SetConnectionProxy("localhost:1101");            

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            Application.Run(new Form1());
        }
    }
}
