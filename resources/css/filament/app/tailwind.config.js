import preset from '../../../../vendor/filament/filament/tailwind.config.preset'
import presetSoftTheme from '../../../../vendor/udaberrico/filament-soft-theme/tailwind.config.preset'
export default {
    presets: [preset, presetSoftTheme],
    content: [
        './app/Filament/App/**/*.php',
        './resources/views/filament/app/**/*.blade.php',
        './vendor/filament/**/*.blade.php',
        './vendor/udaberrico/filament-soft-theme/**/*.blade.php',
    ],
}
