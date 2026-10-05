# Changelog Sound Fx Library
### v1.1.0 - 05-10-2026 (fork by sargas79)
This release is published from a fork. SoundFx Library was created by CDeenen (Material Foundry) and had not been updated since Foundry v11; this fork only brings it up to date for current Foundry versions.<br>
-Updated module.json for Foundry VTT v13 and v14 (verified v14, minimum v11)<br>
-Removed manifest fields that Foundry v12+ no longer accepts (name, author, minimumCoreVersion, compatibleCoreVersion)<br>
-packRegistry.js is now loaded as an ES module and guards against missing Soundboard/Moulinette APIs<br>
-Manifest, download and attribution links now point to this fork<br>
-Fixed the release workflow (Attribution.xlsx file name, updated GitHub Actions)<br>

### v1.0.3 - 08-05-2024
-Updated manifest.json for Foundry v11<br>
-Added background images for the Foundry Add-on Modules browser

### v1.0.2 - 31-08-2022
-Updated manifest.json for Foundry v10

### v1.0.1 - 09-06-2021
<b>File name changes</b>
<ul>
<li>In 'Nature/Loops/Forest Day': forest-# => forest-day-#</li>
<li>In 'Misc/Single/Squeaky Door Open Slow': squeakydoor-open-veryslow-# => squeaky-door-open-slow-#</li>
</ul>

<b>Other</b>
<ul>
<li>Added pack registration for 'Soundboard by Blitz' and 'Moulinette Forge Sounds'. Module needs to be enabled for this to function.</li>
<li>Changed folder structure: All similar sounds are now placed in a folder so 'Soundboard by Blitz' automatically loads them as wildcard sounds</li>
</ul>

### v1.0.0 - 08-06-2021
Initial release