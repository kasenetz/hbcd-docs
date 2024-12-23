# Novel Technologies & Wearable Sensors

## Instruments
The current data release includes the following instruments:

<table style="width: 100%; border-collapse: collapse; table-layout: fixed;">
  <thead>
    <tr>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name of Instrument</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Construct</th>
      <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Table Name</th>
    </tr>
  </thead>
<tbody>
	<tr>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;"><a href="#infant-sensor-questionnaire">Infant Sensor Questionnaire</a></td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">Motor behavior, physical activity, sleep</td>
		<td style="border: 1px solid #ddd; padding: 8px; word-wrap: break-word; white-space: normal;">nt_ch_sens_i_qtn_<1|2|3></td>
	</tr>
</tbody>
</table>

## Implementation & Data Collection
Sensor and associated questionaire data are collected during V02 and V03. Sensors are placed on the child by a research assistant during a visit and then worn for 72 hours, during which data were collected across typical activities in the natural environment.
The child-specific Infant Sensor Questionnaire surveys (translated to Spanish for HBCD by [BURG Translations](https://burgtranslations.com/our-services/)) were sent automatically to caregivers via their preferred method of contact (email or text message) marked by the research assistant during the visit.

## Wearable Sensors
Infant leg movement data collected by wearable sensors for HBCD, which captures information related to motor behavior, physical activity, sleep. Wearable sensor data (accelerometer and gyroscope) were collected continuously over 72 hours from sensors placed on infants’ right and left ankles to estimate movement frequency, intensity, and sleep periods. Caregivers followed normal routines, removing sensors only for water exposure (e.g., baths) and replacing them afterward. Each sensor (Axivity AX6) was calibrated by recording 10 seconds on each of its six flat surfaces before data collection. Sensors recorded accelerometer (±16 g) and gyroscope (±2000 dps) data at 25 Hz, enabling estimates of sedentary, light, moderate-to-vigorous activity, and sleep. See [Pini et al. 2024](https://doi.org/10.1016/j.dcn.2024.101446) for a full measure description.

### Quality Control & Known Issues  
Raw calibration files were checked during active data collection to verify the presence of sufficient data for each of the six axes. A random selection of 72-hour data files were reviewed on a weekly basis to check for the presence of data, labeling of right and left leg, and sampling rate used. Since the QC process is manual and visual, only a small percentage of files were reviewed each week.

Quality control revealed that issues were generally rare and most data were deemed to be present and accurately collected. Errors that did arise were corrected when possible (though this was typically not feasible). 

<p>
<summary>Common QC errors include:</summary>
<ul>
    <li>Calibration files:
        <ul>
            <li>Inadequate data for each of the six axes, often due to human error</li>
            <li>Missing data, caused by either human error or technical difficulties</li>
        </ul>
    </li>
    <li>72-hour files:
    <ul>
        <li>Missing data, due to human error, technical issues, or a parent/legal guardian declining to participate in this aspect of the study</li>
        <li>Sensors being removed for extended periods during the 72-hour collection</li>
        <li>Incorrect sampling rate</li>
    </ul>
</ul>
</p>

Subject matter experts would like users to note that accelerometer sensor timestamps can drift over time. Although right and left leg sensors start recording simultaneously with the same sampling rate and duration, exact time alignment cannot be assumed. By our estimates, Axivity AX6 sensors recording at 25 samples/sec diverge from one another by a couple of seconds over 72 hours, with the magnitude of this discrepancy increasing over time. Furthermore, offsets differed between sensors, necessitating a calibration procedure to correct for these differences ([Oh et al., 2024](https://doi.org/10.3390/s24175736)).

In addition, for raw data downloads, when calibration files are missing, it is technically possible to use a different set of calibration files from the same 2 sensors that were collected from a different data collection session close in time. For processed data downloads, when calibration files are missing, data are not processed. In analysis, users are advised to use caution in analyzing datasets with missing data.

## Infant Sensor Questionnaire
The Infant Sensor Questionnaire, developed by the HBCD Workgroup, is daily survey about infant heart rate and leg movement sensors that capture information about motor behavior, physical activity, and sleep. The survey is sent daily over 3 days while the infant wore heart rate and leg movement sensors to capture context for the recordings. Sent automatically to primary caregivers at 24, 48, and 72 hours, the survey covered the preceding 24 hours, asking if sensors were worn consistently and gathering information on daily activities (e.g., typicality of the day; nap and sleep duration; time spent in car seat, swing, or other restraining device; time in a moving car or stroller; and leg swaddling during sleep). See [Pini et al. 2024](https://doi.org/10.1016/j.dcn.2024.101446) for a full description of this measure. 

### Quality Control & Known Issues 
A small percentage of surveys (due to the procedure being manual) were randomly spot-checked on a weekly basis to confirm presence of responses. When no responses were received, RAs were contacted to confirm whether the surveys had been sent to participants as intended. The most common cause of missing responses was caregiver non-response, and less commonly due to human error (preferred contact/contact method not selected by RA) or technological malfunction. Please consider that occurrence of caregiver non-response may not be randomly distributed across the sample.


<details class="collapsible references">
  <summary class="references">References</summary>
 <ul>
<p>Ghazi, M. A., Zhou, J., Havens, K. L., &amp; Smith, B. A. (2024). Accelerometer thresholds for estimating physical activity intensity levels in infants: A preliminary study. <em>Sensors</em> (Basel, Switzerland), 24(14), 4436. <a href="https://doi.org/10.3390/s24144436">https://doi.org/10.3390/s24144436</a></p>
<p>Jeung, S., Cockx, H., Appelhoff, S., Berg, T., Gramann, K., Grothkopp, S., Warmerdam, E., Hansen, C., Oostenveld, R., BIDS Maintainers, &amp; Welzel, J. (2024). Motion-BIDS: an extension to the brain imaging data structure to organize motion data for reproducible research. <em>Scientific Data</em>, 11(1), 716. <a href="https://doi.org/10.1038/s41597-024-03559-8">https://doi.org/10.1038/s41597-024-03559-8</a></p>
<p>Oh, J., Loeb, G. E., &amp; Smith, B. A. (2024). The utility of calibrating wearable sensors before quantifying infant leg movements. <em>Sensors</em> (Basel, Switzerland), 24(17), 5736. <a href="https://doi.org/10.3390/s24175736">https://doi.org/10.3390/s24175736</a></p>
<p>Oh, J., Ordoñez, E. L. T., Velasquez, E., Mejía, M., Del Pilar Grazioso, M., Rohloff, P., &amp; Smith, B. A. (2024). Associating neuromotor outcomes at 12 months with wearable sensor measures collected during early infancy in rural Guatemala. <em>Gait &amp; Posture</em>, 113, 477–489. <a href="https://doi.org/10.1016/j.gaitpost.2024.08.005">https://doi.org/10.1016/j.gaitpost.2024.08.005</a></p>
<p>Pini, N., Fifer, W. P., Oh, J., Nebeker, C., Croff, J. M., Smith, B. A., &amp; Novel Technology/Wearable Sensors Working Group. (2024). Remote data collection of infant activity and sleep patterns via wearable sensors in the HEALthy Brain and Child Development Study (HBCD). <em>Developmental Cognitive Neuroscience</em>, 69(101446), 101446. <a href="https://doi.org/10.1016/j.dcn.2024.101446">https://doi.org/10.1016/j.dcn.2024.101446</a></p>
<p>Smith, B. A., Trujillo-Priego, I. A., Lane, C. J., Finley, J. M., &amp; Horak, F. B. (2015). Daily quantity of infant leg movement: Wearable sensor algorithm and relationship to walking onset. <em>Sensors</em> (Basel, Switzerland), 15(8), 19006–19020. <a href="https://doi.org/10.3390/s150819006">https://doi.org/10.3390/s150819006</a></p>
<p>Trujillo-Priego, I. A., &amp; Smith, B. A. (2017). Kinematic characteristics of infant leg movements produced across a full day. <em>Journal of Rehabilitation and Assistive Technologies Engineering</em>, 4, 205566831771746. <a href="https://doi.org/10.1177/2055668317717461">https://doi.org/10.1177/2055668317717461</a></p>
<p>Trujillo-Priego, I. A., Zhou, J., Werner, I. F., Deng, W., &amp; Smith, B. A. (2020). Infant leg activity intensity before and after naps. <em>Journal for the Measurement of Physical Behaviour</em>, 3(2), 157–163.<a href="https://doi.org/10.1123/jmpb.2019-0011">https://doi.org/10.1123/jmpb.2019-0011</a></p>
</ul>
</details>
<br>

