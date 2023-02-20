interface ItemData {
    /** "★ Flip Knife | Doppler (Factory New)" */
    name: string,
    /** "★ Flip Knife" */
    weapon: string,
    /** "Doppler" */
    skin: string,
    wear: "Factory New" | "Minimal Wear" | "Field-Tested" | "Well-Worn" | "Battle-Scarred",
    statTrak: boolean,
    souvenir: boolean,
    knife: boolean
}

export default function parseName(name: string): ItemData;
