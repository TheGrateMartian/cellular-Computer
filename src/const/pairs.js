import logo from '../assets/logo.svg'
import {
    AminoAcids, Antivirus,
    Bytes,
    Cables, Carbs,
    CellWall,
    Chloroplast,
    Container,
    CPU,
    Cytoplasm, DiffusionCell, DiffusionPC, ElectricEnergy, EndoRet,
    GPU, Mitochondria,
    Motherboard, NucleicAcids,
    Nucleus, OsmosisCell, OsmosisPC,
    PowerBrick,
    SSD, Vacuole
} from '../assets/icon';
export const Pairs = [
    {
        right: "Nucleus",
        left: "CPU",
        firstImage: Nucleus,
        secondImage: CPU,
    },
    {
        right: "Cytoplasm",
        left: "Motherboard",
        firstImage: Cytoplasm,
        secondImage: Motherboard,
    },
    {
        right: "Cell Wall",
        left: "Container",
        firstImage: CellWall,
        secondImage: Container,
    },
    {
        right: "Chloroplast",
        left: "GPU",
        firstImage: Chloroplast,
        secondImage: GPU,
    },
    {
        right: "Vacuole",
        left: "SSD",
        firstImage: Vacuole,
        secondImage: SSD,
    },
    {
        right: "Endoplasmic reticulum",
        left: "Cables",
        firstImage: EndoRet,
        secondImage: Cables,
    },
    {
        right: "Mitochondria/Ribosomes",
        left: "Power Brick",
        firstImage: Mitochondria,
        secondImage: PowerBrick,
    },
    {
        right: "Nucleic Acids",
        left: "Bytes of data",
        firstImage: NucleicAcids,
        secondImage: Bytes,
    },
    {
        right: "Carbohydrate",
        left: "Electric Energy",
        firstImage: Carbs,
        secondImage: ElectricEnergy,
    },
    {
        right: "Proteins",
        left: "Antivirus",
        firstImage: AminoAcids,
        secondImage: Antivirus,
    },
    {
        right: "Maltose out the cell",
        left: "Video graphics out the PC",
        firstImage: DiffusionCell,
        secondImage: DiffusionPC,
    },
    {
        right: "Water into the vacuole",
        left: "Data into the SSD",
        firstImage: OsmosisCell,
        secondImage: OsmosisPC,
    },
]
