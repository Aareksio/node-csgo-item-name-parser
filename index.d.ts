interface ParsedItem {
    //** "★ Flip Knife | Doppler (Factory New)"
    name: string,
    //** "★ Flip Knife"
    weapon: string,
    //** "Doppler"
    skin: string,
    //** "Factory New"
    wear: "Factory New" | "Minimal Wear" | "Field-Tested" | "Well-Worn" | "Battle-Scarred",
    //** false
    statTrak: boolean,
    //** false
    souvenir: boolean,
    //** true
    knife: boolean
}

export default function parseName(name: string): ParsedItem;
