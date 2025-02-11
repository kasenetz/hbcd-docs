# How To Download Data

## Dictionary Query Tool
<div id="instruction-metadata-caution" class="warning-banner" onclick="toggleCollapse(this)">
  <span class="emoji"><i class="fas fa-exclamation-triangle"></i></span>
  <span class="text">Instruction metadata - Caution, please read carefully:</span>
  <span class="arrow">▸</span>
</div>
<div class="collapsible-content">
<p>The text added to the 'instruction' column in the Data Dictionary metadata are extracted programmatically from the latest instruction field provided in the Data Dictionary of the form based on the order of the fields, and added to all fields up to the next set of instructions. Because of this, in some cases the instruction text may be broken into several instruction fields, of which only the last portion will currently be extracted, leading to partial instruction text. Likewise, since the instruction is provided for all fields up to the next set of instructions, in some cases the instruction provided may correspond to a previous section in the form. Instruction metadata will be fine-tuned manually for future releases. To ensure instructions are accurately interpreted, please refer to the original form.</p> 
</div>

<p style="text-align: center;">
  <a class="button-link" href="https://nbdc-splash-beta.lassoinformatics.com/hbcd-study">HBCD Study on NBDC Data Hub &nbsp; ↗️</a>
</p>


*Below we describe how to use the Dictionary Query Tool on the [NBDC portal supported by Lasso](https://nbdc-hbcd-beta.lassoinformatics.com) to download data.*

**Step 1: Get Started with Approved Access**  
Once your **Data Use Certification** has been approved and you’ve completed the required training, you’ll gain access to the **Query Data** tab in Lasso. This tab is conveniently located in the **left-hand side menu**.

**Step 2: Choose Your Query Method**  
On the Query Data page, you can toggle between the **Query Wizard** and the **Dictionary Query Tool**. Both tools offer flexible ways to build your queries, letting you choose the approach that best suits your needs.
![](images/query1.png)

**Step 3: Navigate the Dictionary Query Tool**  
When using the Dictionary Query Tool, you can filter data based on specific instruments or variables. Use the **column filters** or the **global search** to find exactly what you need quickly and efficiently.

![](images/query2.png)

**Step 4: Export the Data Dictionary**  
After selecting the desired fields, click on **Download** and choose your preferred export format for the data dictionary.

![](images/query3.png)

**Step 5: Query the Associated Data**

If you need both the data dictionary and the associated data:

* Drag and drop the selected fields into the **Selected Tabular Data** area.  
* Click on **Run Tabular Query**, and the system will generate and download the output file directly to your device in seconds.

![](images/query4.png)

**Step 6: Save and Reuse Your Queries**  
To save time on future queries, click the **Save Query** button. Your saved queries can be accessed later via the **Load Query** button. Select your saved query, click **Run**, and instantly download the most up-to-date data.

![](images/query5.png)

## Download Client

In the [Lasso portal](https://nbdc-hbcd-beta.lassoinformatics.com), click **Query Data** on the left-hand side menu and **Choose Files For Download** at the bottom of the page and proceeed as follows:

**Step 1:** Select the files you wish to download from the pop-up that appears. As you toggle to select more data to download, the text at the top of the window will update with the total count and size of files selected.       

<img src="../images/downloadclient1.png" alt="Screenshot of pop-up" width="50%" height="auto" class="center">

**Step 2:** Click **Trigger Transfer** to initiate download

**Step 3:** Select preferred method for download - **Lasso Download Client** or **Globus Share**

![](images/downloadclient2.png)

**If using the Lasso Download Client**, install it locally and open the application. Follow the on-screen instructions to specify the download directory. You will be redirected to log into the Lasso Portal. Once logged in, the Download Client will monitor the download queue. It should now be detectable in the Lasso Portal, where you will be prompted to confirm the installed client when initiating file transfers. After the transfer begins, the Download Client will display the download progress:

<img src="../images/downloadclient3.png" width="80%" height="auto" class="center">


