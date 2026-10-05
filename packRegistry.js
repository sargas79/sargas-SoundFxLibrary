/**
 * SoundFx Library - pack registration for third-party soundboard modules.
 *
 * Originally written by CDeenen (Material Foundry). This fork only updates the
 * module for current Foundry VTT versions (v13 / v14); the sounds and the
 * registration logic are unchanged.
 *
 * Loaded as an ES module so that it runs in strict mode and does not leak
 * globals, which is the recommended approach for Foundry v12+.
 */

const MODULE_ID = 'soundfxlibrary';
const MODULE_LINK = 'https://github.com/sargas79/sargas-SoundFxLibrary';
const ATTRIBUTION_URL = 'https://raw.githubusercontent.com/sargas79/sargas-SoundFxLibrary/master/Attribution.xlsx';

const SOUND_PACKS_SOUNDBOARD = ['Combat', 'Creatures', 'Misc', 'Nature', 'Tavern', 'Town'];

const SOUND_PACKS_MOULINETTE = [
    'Combat/Loops', 'Combat/Single',
    'Creatures/Animals', 'Creatures/Monsters',
    'Misc/Loops', 'Misc/Single',
    'Nature/Loops', 'Nature/Single',
    'Tavern/Loops', 'Tavern/Single',
    'Town/Loops', 'Town/Single'
];

/* Soundboard by Blitz */
Hooks.once('SBPackageManagerReady', () => {
    const packageManager = globalThis.SoundBoard?.packageManager;
    if (!packageManager?.addSoundPack) return;

    for (const pack of SOUND_PACKS_SOUNDBOARD) {
        packageManager.addSoundPack(
            game.i18n.localize(`SOUNDFXLIBRARY.${pack}.title`),
            `modules/${MODULE_ID}/${pack}`,
            MODULE_ID,
            {
                description: game.i18n.localize(`SOUNDFXLIBRARY.${pack}.description`),
                licenses: [{
                    licenseUrl: ATTRIBUTION_URL,
                    licenseType: 'Multiple',
                    licenseDescription: game.i18n.localize('SOUNDFXLIBRARY.licenseDescription')
                }],
                author: 'CDeenen',
                link: MODULE_LINK
            }
        );
    }
});

/* Moulinette */
Hooks.once('ready', () => {
    const moulinette = game.moulinette;
    if (!moulinette || !Array.isArray(moulinette.sources)) return;

    const moulinetteSources = SOUND_PACKS_MOULINETTE.map((pack) => ({
        type: 'sounds',
        publisher: 'CDeenen',
        pack,
        source: 'data',
        path: `modules/${MODULE_ID}/${pack}`
    }));

    moulinette.sources.push(...moulinetteSources);
});
