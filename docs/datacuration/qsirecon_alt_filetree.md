## QSIRecon 
QSIPrep derivatives are passed to QSIRecon for reconstruction, including ODF/FOD reconstruction, tractography, Fixel estimation and regional connectivity. The data are processed using a variety of methods and models (e.g. [Dipy](https://dipy.org/), [MRTrix](https://www.mrtrix.org/), [DSI Studio](https://dsi-studio.labsolver.org/, etc). Please see the [QSIRecon webpage](https://qsirecon.readthedocs.io/en/latest/) for a details.

Thought not dsplayed below, note that all `dwimap.nii.gz` files have associated JSON files.

<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;SPACE&gt;</b> label values: <code>ACPC</code>, <code>MNIInfant+1</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;BUNDLE&gt;</b> label values: <code>AssociationHippocampusAlveusR</code>, <code>AssociationUncinateFasciculusR</code>, <code>ProjectionBasalGangliaCorticostriatalTractR</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;DIPY-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>ak</code>, <code>kfa</code>, <code>md</code>, 
  <code>mk</code>, <code>mkt</code>, <code>rd</code>, <code>rk</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;DSI-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>fa</code>, <code>ha</code>, <code>md</code>, 
  <code>rd</code>, <code>txx</code>, <code>txy</code>, <code>tyy</code>,
  <code>tyz</code>, <code>tzz</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;MAP-PARAM&gt;</b> label values: <code>ng</code>, <code>ngpar</code>, <code>ngperp</code>, <code>pa</code>, <code>path</code>, <code>rtap</code>, <code>rtop</code>, <code>rtpp</code></p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;"><b style="color: #0077cc;">&lt;TENSOR-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>am</code>, <code>fa</code>, <code>li</code>, <code>rd</code></p>

```
derivatives/ 
|__ qsirecon/
|  |__ log/
|
|__ qsirecon-DIPYDKI/
|   |__ sub-<label>/
|       |__ ses-<label>/
|           |__ dwi/
|           |   |__ SUBSES_space-ACPC_bundles-DSIStudio_scalarstats.tsv
|           |   |__ SUBSES_space-<SPACE>_model-dki_param-<DIPY-PARAM>_dwimap.nii.gz
|           |   |__ SUBSES_space-<SPACE>_model-tensor_param-fa_dwimap.nii.gz
|           |__ figures/
|           |__ SUBSES.html    
|            
|__ qsirecon-DSIStudio/
|   |__ sub-<label>/
|       |__ ses-<label>/
|           |__ dwi/
|           |   |__ SUBSES_space-ACPC_bundle-<BUNDLE>_streamlines.tck.gz
|           |   |__ SUBSES_space-ACPC_bundles-DSIStudio_<scalar|tdi>stats.tsv
|           |   |__ SUBSES_space-ACPC_bundlestats.csv
|           |   |__ SUBSES_space-ACPC_dwimap.fib.gz
|           |   |__ SUBSES_space-ACPC_mapping.map.gz
|           |   |__ SUBSES_space-<SPACE>_model-gqi_param-<gfa|iso|qa>_dwimap.nii.gz
|           |   |__ SUBSES_space-<SPACE>_model-rdi_param-<rd1|rd2>_dwimap.nii.gz
|           |   |__ SUBSES_space-<SPACE>_model-tensor_param-<DSI-PARAM>_dwimap.nii.gz 
|           |__ figures/
|           |__ SUBSES.html  
|             
|__ qsirecon-TORTOISE_model-MAPMRI/
|   |__ sub-<label>/
|       |__ ses-<label>/
|           |__ dwi/
|           |   |__ SUBSES_space-ACPC_bundles-DSIStudio_scalarstats.tsv
|           |   |__ SUBSES_space-<SPACE>_model-mapmri_param-<MAP-PARAM>_dwimap.nii.gz
|           |   |__ SUBSES_space-<SPACE>_model-tensor_param-<TENSOR-PARAM>_dwimap.nii.gz
|           |__ figures/
|           |__ SUBSES.html    
|
|__ qsirecon-TORTOISE_model-tensor/
```    
*See [Format of File Structure Visuals](#visformat) for guidance on interpreting the folder trees*.



<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;SPACE&gt;</b> label values: <code>ACPC</code>, <code>MNIInfant+1</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;BUNDLE&gt;</b> label values: <code>AssociationHippocampusAlveusR</code>, <code>AssociationUncinateFasciculusR</code>, <code>ProjectionBasalGangliaCorticostriatalTractR</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;DIPY-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>ak</code>, <code>kfa</code>, <code>md</code>, 
  <code>mk</code>, <code>mkt</code>, <code>rd</code>, <code>rk</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;DSI-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>fa</code>, <code>ha</code>, <code>md</code>, 
  <code>rd</code>, <code>txx</code>, <code>txy</code>, <code>tyy</code>,
  <code>tyz</code>, <code>tzz</code>
</p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;">
  <b style="color: #0077cc;">&lt;MAP-PARAM&gt;</b> label values: <code>ng</code>, <code>ngpar</code>, <code>ngperp</code>, <code>pa</code>, <code>path</code>, <code>rtap</code>, <code>rtop</code>, <code>rtpp</code></p>
<p style="margin-bottom: 0; padding-bottom: 0; font-size: smaller;"><b style="color: #0077cc;">&lt;TENSOR-PARAM&gt;</b> label values: 
  <code>ad</code>, <code>am</code>, <code>fa</code>, <code>li</code>, <code>rd</code></p>