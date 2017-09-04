using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using CefSharp;
using CefSharp.WinForms;
using System.Diagnostics;
using System.Runtime.InteropServices;

namespace Proxydigger
{
    public partial class Form1 : Form
    {
        public ChromiumWebBrowser chromeBrowser;
        public Process exeProcess;

        [DllImport("shcore.dll")]
        static extern int SetProcessDpiAwareness(_Process_DPI_Awareness value);

        enum _Process_DPI_Awareness
        {
            Process_DPI_Unaware = 0,
            Process_System_DPI_Aware = 1,
            Process_Per_Monitor_DPI_Aware = 2
        }

        public Form1()
        {
            SetProcessDpiAwareness(_Process_DPI_Awareness.Process_DPI_Unaware);

            //http://stackoverflow.com/questions/4009150/c-sharp-winforms-disable-dpi-scaling
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.None;
            this.Font = new System.Drawing.Font("Arial", 14F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Pixel, ((byte)(0)));
            
            InitializeComponent();
            this.Text = "Proxydigger";

            //WindowState = FormWindowState.Maximized;

            string appPath = System.IO.Path.GetDirectoryName(Application.ExecutablePath);
            //Process.Start(appPath+"\\php7\\php.exe -S localhost:1972 -t "+appPath);

            //http://stackoverflow.com/questions/9679375/run-an-exe-from-c-sharp-code
            // Use ProcessStartInfo class
            ProcessStartInfo startInfo = new ProcessStartInfo();
            startInfo.CreateNoWindow = false;
            //startInfo.UseShellExecute = false;
            startInfo.FileName = appPath + "\\php7\\php.exe";
            startInfo.WindowStyle = ProcessWindowStyle.Hidden;
            startInfo.Arguments = "-S localhost:1972 -t \"" + appPath + "\\webroot\"";

            try
            {
                // Start the process with the info we specified.
                // Call WaitForExit and then the using statement will close.
                //using (Process exeProcess = Process.Start(startInfo))
                //{
                //   exeProcess.WaitForExit();
                //}

                exeProcess = Process.Start(startInfo);

            }
            catch
            {
                // Log error.
            }
                       
            CefSettings settings = new CefSettings();
            // Initialize cef with the provided settings
            Cef.Initialize(settings);
            // Create a browser component
            chromeBrowser = new ChromiumWebBrowser("http://localhost:1972/main.html")
            {
                Dock = DockStyle.Fill,
                Size = Size,
            };
            
            chromeBrowser.Location = new System.Drawing.Point(0, 0);
            chromeBrowser.MinimumSize = new System.Drawing.Size(944, 561);
            chromeBrowser.Size = new System.Drawing.Size(944, 561);

            chromeBrowser.BringToFront();

            //fill it to the form window.
            chromeBrowser.Dock = DockStyle.Fill;

            // Add it to the form
            this.Controls.Add(chromeBrowser);

 

        }


        private void Form1_FormClosed(object sender, FormClosedEventArgs e)
        {
            Cef.Shutdown();
            exeProcess.Kill();
        }
    }
  }