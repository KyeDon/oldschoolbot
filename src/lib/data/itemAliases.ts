import { Items } from 'oldschooljs';
import { itemNameMap } from 'oldschooljs/dist/structures/Items';

function cleanString(str: string) {
	return str.replace(/[^0-9a-zA-Z+]/gi, '').toUpperCase();
}

function setItemAlias(id: number, name: string | string[], rename = true) {
	let firstName: string | null = null;
	// Add the item to the custom items array
	if (typeof name === 'string') {
		firstName = name;
		itemNameMap.set(cleanString(name), id);
	} else {
		for (const _name of name) {
			if (!firstName) firstName = _name;
			itemNameMap.set(cleanString(_name), id);
		}
	}
	// Update the item name to it's first alias
	if (rename) {
		Items.set(id, {
			...Items.get(id)!,
			name: firstName!,
			id
		});
	}
}

// Graceful sets -- Arceuus
setItemAlias(13579, ['Arceuus graceful hood', 'Purple graceful hood']);
setItemAlias(13581, ['Arceuus graceful cape', 'Purple graceful cape']);
setItemAlias(13583, ['Arceuus graceful top', 'Purple graceful top']);
setItemAlias(13585, ['Arceuus graceful legs', 'Purple graceful legs']);
setItemAlias(13587, ['Arceuus graceful gloves', 'Purple graceful gloves']);
setItemAlias(13589, ['Arceuus graceful boots', 'Purple graceful boots']);
// Graceful sets -- Port Piscarilius
setItemAlias(13591, ['Piscarilius graceful hood', 'Cyan graceful hood']);
setItemAlias(13593, ['Piscarilius graceful cape', 'Cyan graceful cape']);
setItemAlias(13595, ['Piscarilius graceful top', 'Cyan graceful top']);
setItemAlias(13597, ['Piscarilius graceful legs', 'Cyan graceful legs']);
setItemAlias(13599, ['Piscarilius graceful gloves', 'Cyan graceful gloves']);
setItemAlias(13601, ['Piscarilius graceful boots', 'Cyan graceful boots']);
// Graceful sets -- Lovakengj
setItemAlias(13603, ['Lovakengj graceful hood', 'Yellow graceful hood']);
setItemAlias(13605, ['Lovakengj graceful cape', 'Yellow graceful cape']);
setItemAlias(13607, ['Lovakengj graceful top', 'Yellow graceful top']);
setItemAlias(13609, ['Lovakengj graceful legs', 'Yellow graceful legs']);
setItemAlias(13611, ['Lovakengj graceful gloves', 'Yellow graceful gloves']);
setItemAlias(13613, ['Lovakengj graceful boots', 'Yellow graceful boots']);
// Graceful sets -- Shayzien
setItemAlias(13615, ['Shayzien graceful hood', 'Red graceful hood']);
setItemAlias(13617, ['Shayzien graceful cape', 'Red graceful cape']);
setItemAlias(13619, ['Shayzien graceful top', 'Red graceful top']);
setItemAlias(13621, ['Shayzien graceful legs', 'Red graceful legs']);
setItemAlias(13623, ['Shayzien graceful gloves', 'Red graceful gloves']);
setItemAlias(13625, ['Shayzien graceful boots', 'Red graceful boots']);
// Graceful sets -- Hosidius
setItemAlias(13627, ['Hosidius graceful hood', 'Green graceful hood']);
setItemAlias(13629, ['Hosidius graceful cape', 'Green graceful cape']);
setItemAlias(13631, ['Hosidius graceful top', 'Green graceful top']);
setItemAlias(13633, ['Hosidius graceful legs', 'Green graceful legs']);
setItemAlias(13635, ['Hosidius graceful gloves', 'Green graceful gloves']);
setItemAlias(13637, ['Hosidius graceful boots', 'Green graceful boots']);
// Graceful sets -- All cities
setItemAlias(13667, ['Kourend graceful hood', 'White graceful hood']);
setItemAlias(13669, ['Kourend graceful cape', 'White graceful cape']);
setItemAlias(13671, ['Kourend graceful top', 'White graceful top']);
setItemAlias(13673, ['Kourend graceful legs', 'White graceful legs']);
setItemAlias(13675, ['Kourend graceful gloves', 'White graceful gloves']);
setItemAlias(13677, ['Kourend graceful boots', 'White graceful boots']);
// Graceful sets -- Brimhaven
setItemAlias(21061, ['Brimhaven graceful hood', 'Dark blue graceful hood']);
setItemAlias(21064, ['Brimhaven graceful cape', 'Dark blue graceful cape']);
setItemAlias(21067, ['Brimhaven graceful top', 'Dark blue graceful top']);
setItemAlias(21070, ['Brimhaven graceful legs', 'Dark blue graceful legs']);
setItemAlias(21073, ['Brimhaven graceful gloves', 'Dark blue graceful gloves']);
setItemAlias(21076, ['Brimhaven graceful boots', 'Dark blue graceful boots']);
// Graceful sets -- Brimhaven
setItemAlias(24743, ['Dark graceful hood', 'Black graceful hood']);
setItemAlias(24746, ['Dark graceful cape', 'Black graceful cape']);
setItemAlias(24749, ['Dark graceful top', 'Black graceful top']);
setItemAlias(24752, ['Dark graceful legs', 'Black graceful legs']);
setItemAlias(24755, ['Dark graceful gloves', 'Black graceful gloves']);
setItemAlias(24758, ['Dark graceful boots', 'Black graceful boots']);
// Graceful sets -- Trailblazer
setItemAlias(25069, 'Trailblazer graceful hood');
setItemAlias(25072, 'Trailblazer graceful cape');
setItemAlias(25075, 'Trailblazer graceful top');
setItemAlias(25078, 'Trailblazer graceful legs');
setItemAlias(25081, 'Trailblazer graceful gloves');
setItemAlias(25084, 'Trailblazer graceful boots');

// Supply crate (Mahogany Homes)
setItemAlias(24884, 'Builders supply crate');

setItemAlias(25344, 'Red soul cape');
setItemAlias(25346, 'Blue soul cape');

setItemAlias(6672, 'Fishbowl pet');

setItemAlias(3062, ['pmb'], false);
setItemAlias(3713, ['hmb'], false);
setItemAlias(6199, ['tmb'], false);
setItemAlias(19939, ['umb'], false);
setItemAlias(47509, ['emb'], false);
// Castle wars
setItemAlias(25165, 'Red decorative full helm');
setItemAlias(4071, 'Red decorative helm');
setItemAlias(4069, 'Red decorative body');
setItemAlias(4070, 'Red decorative legs');
setItemAlias(11893, 'Red decorative skirt');
setItemAlias(25163, 'Red decorative boots');
setItemAlias(4072, 'Red decorative shield');
setItemAlias(4068, 'Red decorative sword');

setItemAlias(25169, 'White decorative full helm');
setItemAlias(4506, 'White decorative helm');
setItemAlias(4504, 'White decorative body');
setItemAlias(4505, 'White decorative legs');
setItemAlias(11894, 'White decorative skirt');
setItemAlias(25167, 'White decorative boots');
setItemAlias(4507, 'White decorative shield');
setItemAlias(4503, 'White decorative sword');

setItemAlias(25174, 'Gold decorative full helm');
setItemAlias(4511, 'Gold decorative helm');
setItemAlias(4509, 'Gold decorative body');
setItemAlias(4510, 'Gold decorative legs');
setItemAlias(11895, 'Gold decorative skirt');
setItemAlias(25171, 'Gold decorative boots');
setItemAlias(4512, 'Gold decorative shield');
setItemAlias(4508, 'Gold decorative sword');

setItemAlias(4515, 'Zamorak castlewars hood');
setItemAlias(4516, 'Zamorak castlewars cloak');
setItemAlias(4513, 'Saradomin castlewars hood');
setItemAlias(4514, 'Saradomin castlewars cloak');

setItemAlias(11898, 'Decorative magic hat');
setItemAlias(11896, 'Decorative magic top');
setItemAlias(11897, 'Decorative magic robe');
setItemAlias(11899, 'Decorative ranged top');
setItemAlias(11900, 'Decorative ranged legs');
setItemAlias(11901, 'Decorative quiver');
