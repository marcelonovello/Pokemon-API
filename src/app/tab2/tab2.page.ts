import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonBadge,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonSpinner,
    IonProgressBar,
    IonChip,
    IonAvatar,
    IonList,
    IonListHeader,
    IonBackButton,
    IonButtons
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { heart, heartOutline, arrowBack, statsChart, information, images, colorPalette } from 'ionicons/icons';

import { PokemonService } from '../services/pokemon.service';
import { FavoritesService } from '../services/favorite.service';
import { PokemonDetails, PokemonSpecies } from '../models/pokemon.model';

@Component({
    selector: 'app-tab2',
    standalone: true,
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    imports: [
        CommonModule,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonButton,
        IonIcon,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonLabel,
        IonBadge,
        IonGrid,
        IonRow,
        IonCol,
        IonImg,
        IonSpinner,
        IonProgressBar,
        IonChip,
        IonAvatar,
        IonList,
        IonListHeader,
        IonBackButton,
        IonButtons
    ]
})
export class Tab2Page implements OnInit {
    pokemon: PokemonDetails | null = null;
    pokemonSpecies: PokemonSpecies | null = null;
    isLoading = false;
    pokemonId: string | null = null;
    selectedImageIndex = 0;
    availableImages: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private pokemonService: PokemonService,
        private favoritesService: FavoritesService
    ) {
        addIcons({ heart, heartOutline, arrowBack, statsChart, information, images, colorPalette });
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.pokemonId = params.get('id');
            if (this.pokemonId) {
                this.loadPokemonDetails(this.pokemonId);
            }
        });
    }

    /**
     * Carrega os detalhes completos do Pokémon
     */
    loadPokemonDetails(id: string) {
        this.isLoading = true;
        this.pokemonService.getCompletePokemonInfo(id).subscribe({
            next: (data) => {
                this.pokemon = data.details;
                this.pokemonSpecies = data.species;
                this.setupImages();
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Erro ao carregar detalhes do Pokémon:', error);
                this.isLoading = false;
            }
        });
    }

    /**
     * Configura as imagens disponíveis do Pokémon
     */
    setupImages() {
        if (!this.pokemon) return;

        this.availableImages = [];
        const sprites = this.pokemon.sprites;

        // Imagem oficial
        if (sprites.other['official-artwork'].front_default) {
            this.availableImages.push(sprites.other['official-artwork'].front_default);
        }

        // Dream World
        if (sprites.other.dream_world.front_default) {
            this.availableImages.push(sprites.other.dream_world.front_default);
        }

        // Sprites normais
        if (sprites.front_default) this.availableImages.push(sprites.front_default);
        if (sprites.back_default) this.availableImages.push(sprites.back_default);
        if (sprites.front_shiny) this.availableImages.push(sprites.front_shiny);
        if (sprites.back_shiny) this.availableImages.push(sprites.back_shiny);
    }

    /**
     * Navega entre as imagens
     */
    changeImage(direction: number) {
        this.selectedImageIndex += direction;
        if (this.selectedImageIndex < 0) {
            this.selectedImageIndex = this.availableImages.length - 1;
        } else if (this.selectedImageIndex >= this.availableImages.length) {
            this.selectedImageIndex = 0;
        }
    }

    /**
     * Volta para a tela anterior
     */
    goBack() {
        this.location.back();
    }

    /**
     * Alterna o status de favorito
     */
    toggleFavorite() {
        if (this.pokemon) {
            this.favoritesService.toggleFavorite(this.pokemon);
        }
    }

    /**
     * Verifica se é favorito
     */
    isFavorite(): boolean {
        return this.pokemon ? this.favoritesService.isFavorite(this.pokemon.id) : false;
    }

    /**
     * Obtém a cor do tipo
     */
    getTypeColor(type: string): string {
        const typeColors: { [key: string]: string } = {
            normal: '#A8A878',
            fire: '#F08030',
            water: '#6890F0',
            electric: '#F8D030',
            grass: '#78C850',
            ice: '#98D8D8',
            fighting: '#C03028',
            poison: '#A040A0',
            ground: '#E0C068',
            flying: '#A890F0',
            psychic: '#F85888',
            bug: '#A8B820',
            rock: '#B8A038',
            ghost: '#705898',
            dragon: '#7038F8',
            dark: '#705848',
            steel: '#B8B8D0',
            fairy: '#EE99AC'
        };
        return typeColors[type] || '#68A090';
    }

    /**
     * Capitaliza texto
     */
    capitalize(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    /**
     * Traduz tipos de Pokémon para português
     */
    translateTypeName(typeName: string): string {
        const translations: { [key: string]: string } = {
            'normal': 'Normal',
            'fire': 'Fogo',
            'water': 'Água',
            'electric': 'Elétrico',
            'grass': 'Planta',
            'ice': 'Gelo',
            'fighting': 'Lutador',
            'poison': 'Veneno',
            'ground': 'Terra',
            'flying': 'Voador',
            'psychic': 'Psíquico',
            'bug': 'Inseto',
            'rock': 'Pedra',
            'ghost': 'Fantasma',
            'dragon': 'Dragão',
            'dark': 'Sombrio',
            'steel': 'Aço',
            'fairy': 'Fada'
        };
        return translations[typeName] || this.capitalize(typeName);
    }

    /**
     * Traduz nomes de Pokémon para português
     */
    translatePokemonName(pokemonName: string): string {
        const translations: { [key: string]: string } = {
            'bulbasaur': 'Bulbasaur',
            'ivysaur': 'Ivysaur',
            'venusaur': 'Venusaur',
            'charmander': 'Charmander',
            'charmeleon': 'Charmeleon',
            'charizard': 'Charizard',
            'squirtle': 'Squirtle',
            'wartortle': 'Wartortle',
            'blastoise': 'Blastoise',
            'caterpie': 'Caterpie',
            'metapod': 'Metapod',
            'butterfree': 'Butterfree',
            'weedle': 'Weedle',
            'kakuna': 'Kakuna',
            'beedrill': 'Beedrill',
            'pidgey': 'Pidgey',
            'pidgeotto': 'Pidgeotto',
            'pidgeot': 'Pidgeot',
            'rattata': 'Rattata',
            'raticate': 'Raticate',
            'spearow': 'Spearow',
            'fearow': 'Fearow',
            'ekans': 'Ekans',
            'arbok': 'Arbok',
            'pikachu': 'Pikachu',
            'raichu': 'Raichu',
            'sandshrew': 'Sandshrew',
            'sandslash': 'Sandslash',
            'nidoran-f': 'Nidoran♀',
            'nidorina': 'Nidorina',
            'nidoqueen': 'Nidoqueen',
            'nidoran-m': 'Nidoran♂',
            'nidorino': 'Nidorino',
            'nidoking': 'Nidoking',
            'clefairy': 'Clefairy',
            'clefable': 'Clefable',
            'vulpix': 'Vulpix',
            'ninetales': 'Ninetales',
            'jigglypuff': 'Jigglypuff',
            'wigglytuff': 'Wigglytuff',
            'zubat': 'Zubat',
            'golbat': 'Golbat',
            'oddish': 'Oddish',
            'gloom': 'Gloom',
            'vileplume': 'Vileplume',
            'paras': 'Paras',
            'parasect': 'Parasect',
            'venonat': 'Venonat',
            'venomoth': 'Venomoth',
            'diglett': 'Diglett',
            'dugtrio': 'Dugtrio',
            'meowth': 'Meowth',
            'persian': 'Persian',
            'psyduck': 'Psyduck',
            'golduck': 'Golduck',
            'mankey': 'Mankey',
            'primeape': 'Primeape',
            'growlithe': 'Growlithe',
            'arcanine': 'Arcanine',
            'poliwag': 'Poliwag',
            'poliwhirl': 'Poliwhirl',
            'poliwrath': 'Poliwrath',
            'abra': 'Abra',
            'kadabra': 'Kadabra',
            'alakazam': 'Alakazam',
            'machop': 'Machop',
            'machoke': 'Machoke',
            'machamp': 'Machamp',
            'bellsprout': 'Bellsprout',
            'weepinbell': 'Weepinbell',
            'victreebel': 'Victreebel',
            'tentacool': 'Tentacool',
            'tentacruel': 'Tentacruel',
            'geodude': 'Geodude',
            'graveler': 'Graveler',
            'golem': 'Golem',
            'ponyta': 'Ponyta',
            'rapidash': 'Rapidash',
            'slowpoke': 'Slowpoke',
            'slowbro': 'Slowbro',
            'magnemite': 'Magnemite',
            'magneton': 'Magneton',
            'farfetchd': 'Farfetch\'d',
            'doduo': 'Doduo',
            'dodrio': 'Dodrio',
            'seel': 'Seel',
            'dewgong': 'Dewgong',
            'grimer': 'Grimer',
            'muk': 'Muk',
            'shellder': 'Shellder',
            'cloyster': 'Cloyster',
            'gastly': 'Gastly',
            'haunter': 'Haunter',
            'gengar': 'Gengar',
            'onix': 'Onix',
            'drowzee': 'Drowzee',
            'hypno': 'Hypno',
            'krabby': 'Krabby',
            'kingler': 'Kingler',
            'voltorb': 'Voltorb',
            'electrode': 'Electrode',
            'exeggcute': 'Exeggcute',
            'exeggutor': 'Exeggutor',
            'cubone': 'Cubone',
            'marowak': 'Marowak',
            'hitmonlee': 'Hitmonlee',
            'hitmonchan': 'Hitmonchan',
            'lickitung': 'Lickitung',
            'koffing': 'Koffing',
            'weezing': 'Weezing',
            'rhyhorn': 'Rhyhorn',
            'rhydon': 'Rhydon',
            'chansey': 'Chansey',
            'tangela': 'Tangela',
            'kangaskhan': 'Kangaskhan',
            'horsea': 'Horsea',
            'seadra': 'Seadra',
            'goldeen': 'Goldeen',
            'seaking': 'Seaking',
            'staryu': 'Staryu',
            'starmie': 'Starmie',
            'mr-mime': 'Mr. Mime',
            'scyther': 'Scyther',
            'jynx': 'Jynx',
            'electabuzz': 'Electabuzz',
            'magmar': 'Magmar',
            'pinsir': 'Pinsir',
            'tauros': 'Tauros',
            'magikarp': 'Magikarp',
            'gyarados': 'Gyarados',
            'lapras': 'Lapras',
            'ditto': 'Ditto',
            'eevee': 'Eevee',
            'vaporeon': 'Vaporeon',
            'jolteon': 'Jolteon',
            'flareon': 'Flareon',
            'porygon': 'Porygon',
            'omanyte': 'Omanyte',
            'omastar': 'Omastar',
            'kabuto': 'Kabuto',
            'kabutops': 'Kabutops',
            'aerodactyl': 'Aerodactyl',
            'snorlax': 'Snorlax',
            'articuno': 'Articuno',
            'zapdos': 'Zapdos',
            'moltres': 'Moltres',
            'dratini': 'Dratini',
            'dragonair': 'Dragonair',
            'dragonite': 'Dragonite',
            'mewtwo': 'Mewtwo',
            'mew': 'Mew'
        };
        return translations[pokemonName.toLowerCase()] || this.capitalize(pokemonName);
    }

    /**
     * Traduz nomes de stats para português
     */
    translateStatName(statName: string): string {
        const translations: { [key: string]: string } = {
            'hp': 'Vida',
            'attack': 'Ataque',
            'defense': 'Defesa',
            'special-attack': 'Ataque Especial',
            'special-defense': 'Defesa Especial',
            'speed': 'Velocidade'
        };
        return translations[statName] || this.capitalize(statName.replace('-', ' '));
    }

    /**
     * Traduz nomes de habilidades para português
     */
    translateAbilityName(abilityName: string): string {
        const translations: { [key: string]: string } = {
            'overgrow': 'Supercrescimento',
            'chlorophyll': 'Clorofila',
            'blaze': 'Chama',
            'solar-power': 'Energia Solar',
            'torrent': 'Torrente',
            'rain-dish': 'Prato de Chuva',
            'shield-dust': 'Pó Escudo',
            'run-away': 'Fuga',
            'keen-eye': 'Olhar Aguçado',
            'tangled-feet': 'Pés Emaranhados',
            'big-pecks': 'Peito Grande',
            'static': 'Estática',
            'lightning-rod': 'Para-raios',
            'sand-veil': 'Véu de Areia',
            'poison-point': 'Espinho Venenoso',
            'rivalry': 'Rivalidade',
            'sheer-force': 'Força Bruta',
            'cute-charm': 'Fofura',
            'competitive': 'Competitiva',
            'friend-guard': 'Guarda do Amigo',
            'magic-guard': 'Guarda Mágica',
            'unaware': 'Desatento',
            'thick-fat': 'Gordura Espessa',
            'inner-focus': 'Foco Interior',
            'early-bird': 'Madrugador',
            'flash-fire': 'Absorve Fogo',
            'flame-body': 'Corpo de Chama',
            'water-absorb': 'Absorve Água',
            'swift-swim': 'Nado Rápido',
            'sand-rush': 'Corrida na Areia',
            'pressure': 'Pressão',
            'volt-absorb': 'Absorve Volt',
            'serene-grace': 'Serenidade',
            'natural-cure': 'Cura Natural',
            'levitate': 'Levitação',
            'effect-spore': 'Esporos',
            'synchronize': 'Sincronismo',
            'clear-body': 'Corpo Limpo',
            'liquid-ooze': 'Gosma',
            'rock-head': 'Cabeça de Rocha',
            'drought': 'Seca',
            'arena-trap': 'Armadilha de Arena',
            'vital-spirit': 'Espírito Vital',
            'white-smoke': 'Fumaça Branca',
            'pure-power': 'Poder Puro',
            'shell-armor': 'Armadura',
            'air-lock': 'Câmara de Ar',
            'hyper-cutter': 'Hiper Cortador',
            'pickup': 'Coleta',
            'truant': 'Truante',
            'hustle': 'Agitação',
            'plus': 'Mais',
            'minus': 'Menos',
            'forecast': 'Clima',
            'sticky-hold': 'Aderência',
            'shed-skin': 'Troca de Pele',
            'guts': 'Coragem',
            'marvel-scale': 'Escama Especial',
            'swarm': 'Enxame',
            'sturdy': 'Firme'
        };
        return translations[abilityName] || this.capitalize(abilityName.replace('-', ' '));
    }

    /**
     * Traduz habitat para português
     */
    translateHabitat(habitat: string): string {
        const translations: { [key: string]: string } = {
            'grassland': 'Campo',
            'forest': 'Floresta',
            'waters-edge': 'Margem da Água',
            'sea': 'Mar',
            'cave': 'Caverna',
            'mountain': 'Montanha',
            'rough-terrain': 'Terreno Acidentado',
            'urban': 'Urbano',
            'rare': 'Raro'
        };
        return translations[habitat] || this.capitalize(habitat.replace('-', ' '));
    }

    /**
     * Traduz cor para português
     */
    translateColor(color: string): string {
        const translations: { [key: string]: string } = {
            'black': 'Preto',
            'blue': 'Azul',
            'brown': 'Marrom',
            'gray': 'Cinza',
            'green': 'Verde',
            'pink': 'Rosa',
            'purple': 'Roxo',
            'red': 'Vermelho',
            'white': 'Branco',
            'yellow': 'Amarelo'
        };
        return translations[color] || this.capitalize(color);
    }

    /**
     * Obtém a descrição em português
     */
    getPortugueseDescription(): string {
        if (!this.pokemonSpecies) return '';

        const ptEntry = this.pokemonSpecies.flavor_text_entries.find(
            entry => entry.language.name === 'pt' || entry.language.name === 'pt-BR'
        );

        if (ptEntry) {
            return ptEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ');
        }

        // Fallback para inglês
        const enEntry = this.pokemonSpecies.flavor_text_entries.find(
            entry => entry.language.name === 'en'
        );

        return enEntry ? enEntry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ') : '';
    }

    /**
     * Obtém o gênero em português
     */
    getPortugueseGenus(): string {
        if (!this.pokemonSpecies) return '';

        const ptGenus = this.pokemonSpecies.genera.find(
            genus => genus.language.name === 'pt' || genus.language.name === 'pt-BR'
        );

        if (ptGenus) {
            return ptGenus.genus;
        }

        // Fallback para inglês
        const enGenus = this.pokemonSpecies.genera.find(
            genus => genus.language.name === 'en'
        );

        return enGenus ? enGenus.genus : '';
    }

    /**
     * Calcula a porcentagem de um stat
     */
    getStatPercentage(statValue: number): number {
        return Math.min((statValue / 255) * 100, 100);
    }

    /**
     * Obtém a cor da barra de stat
     */
    getStatColor(statValue: number): string {
        if (statValue >= 100) return 'success';
        if (statValue >= 70) return 'warning';
        return 'danger';
    }
}
