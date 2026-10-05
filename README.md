# SoundFx Library

> **Note about this fork**
>
> This is **not my module**. SoundFx Library was created by [CDeenen (Material Foundry)](https://github.com/MaterialFoundry/SoundFxLibrary).
> The original project had not been updated since Foundry VTT v11 and appeared to be unmaintained, so I forked it and
> updated the manifest and pack-registration script so that it installs and runs on **Foundry VTT v13 and v14**.
> No sounds were added, removed or changed. All credit for the library and the sound curation goes to the original author.
>
> Install this fork with the following manifest URL:
> `https://github.com/sargas79/sargas-SoundFxLibrary/releases/latest/download/module.json`

This module contains audio effects, and offers no functionality on its own.<br>
Included are over 150 sound effects and loops, ranging from combat hit sounds to forest ambient loops.<br>
<br>
None of the included sounds were made by me. They are all licensed in such a way that I am allowed to share them in this library.<br>
Details on the creators, licenses, changes I've made and links to the source can be found in Attribution.xlsx<br>
<br>
Please note that while you are allowed to use all of these sounds for your personal games, not all sounds are licensed to be used in a commercial settings.
It is up to you to check the license of each sound you're using, Attribution.xlsx might contain errors, no rights can be derived from that document.<br>
<br>
You do not need to enable this module in 'Manage Modules', but if you have Soundboard by Blitz or Moulinette Forge Sounds active, you can activate the module to have its sounds registered as packs with those modules.<br>
<br>
Here is a list of modules that can be used to create soundboards, in order to play these sounds:<br>
<ul>
<li><a href="https://github.com/BlitzKraig/fvtt-SoundBoard">Soundboard by Blitz</a></li>
<li><a href="https://github.com/cdeenen/materialdeck">Material Deck</a></li>
<li><a href="https://github.com/cdeenen/materialkeys">Material Keys</a></li>
<li><a href="https://github.com/SvenWerlen/moulinette-sounds">Moulinette Forge Sounds</a></li>
</ul>

## Installation
1. In Foundry VTT, open **Add-on Modules** and click **Install Module**.
2. Paste the following manifest URL into the **Manifest URL** field and click **Install**:

```
https://github.com/sargas79/sargas-SoundFxLibrary/releases/latest/download/module.json
```

3. The sounds are then available under `modules/soundfxlibrary` in the file picker. Enabling the module in **Manage Modules** is only needed if you want the sound packs registered with Soundboard by Blitz or Moulinette.

Alternatively, download `module.zip` from the [latest release](https://github.com/sargas79/sargas-SoundFxLibrary/releases/latest) and extract it into `Data/modules/soundfxlibrary`.

## Importing Sounds into Material Deck or Material Keys
When selecting a sound for the module's soundboard, select 'File Picker'. When the file browser is open, make sure it is set to 'User Data' at the top.
Then browse to 'modules/soundfxlibrary' and then select the category you want and pick a sound.

## Using Sounds in the Core Playlist Directory
You can also use the sounds without any additional module: create a playlist, add a track and use the file picker to browse to 'modules/soundfxlibrary'. The folders are organised so that 'Loops' contain ambient tracks and 'Single' contain one-shot effects.

## Importing Sounds in Soundboard by Blitz
With this module active, Soundboard by Blitz will register the sounds in packs which can be enabled/disabled individually.

### Custom Directory
Alternatively, you can control the organization more if you've set a custom soundboard directory in Soundboard's module settings. Copy sounds from 'modules/soundfxlibrary' into that directory. Use folders to create categories.

## Using Sounds in Moulinette Forge Sounds
With this module active, index your sounds again and Moulinette will index the module directory.

# Compatibility
| Foundry VTT | Status |
|---|---|
| v14 | Verified by this fork |
| v13 | Supported |
| v11 / v12 | Supported (minimum v11) |
| v10 and older | Use the [original module](https://github.com/MaterialFoundry/SoundFxLibrary) |

# License
This library is covered under the MIT license (copyright CDeenen), however, this does not cover any of the included sounds.<br>
Details on the creators, licenses, changes I've made and links to the source can be found in Attribution.xlsx<br>