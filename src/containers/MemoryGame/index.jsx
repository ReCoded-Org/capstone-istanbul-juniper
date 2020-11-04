import React, { useState } from "react";
import MemoryGameComponent from "../../components/MemoryGame";

const MemoryGame = () => {
  const [isAcidRainFlipped, setIsAcidRainFlipped] = useState(false);
  const [isAirPollutionFlipped, setIsAirPollutionFlipped] = useState(false);
  const [isAlternateEnergyFlipped, setIsAlternateEnergyFlipped] = useState(
    false
  );
  const [isChemicalWasteFlipped, setIsChemicalWasteFlipped] = useState(false);
  const [isDeforestationFlipped, setIsDeforestationFlipped] = useState(false);
  const [isGlobalWarmingFlipped, setIsGlobalWarmingFlipped] = useState(false);
  const [isGreenhouseEffectFlipped, setIsGreenhouseEffectFlipped] = useState(
    false
  );
  const [isLitteringFlipped, setIsLitteringFlipped] = useState(false);
  const [isMeltingIceCapsFlipped, setIsMeltingIceCapsFlipped] = useState(false);
  const [isOzoneHoleFlipped, setIsOzoneHoleFlipped] = useState(false);
  const [isRecycleFlipped, setIsRecycleFlipped] = useState(false);
  const [isWaterPollutionFlipped, setIsWaterPollutionFlipped] = useState(false);

  const [isAcidRainCloneFlipped, setIsAcidRainCloneFlipped] = useState(false);
  const [isAirPollutionCloneFlipped, setIsAirPollutionCloneFlipped] = useState(
    false
  );
  const [
    isAlternateEnergyCloneFlipped,
    setIsAlternateEnergyCloneFlipped,
  ] = useState(false);
  const [
    isChemicalWasteCloneFlipped,
    setIsChemicalWasteCloneFlipped,
  ] = useState(false);
  const [
    isDeforestationCloneFlipped,
    setIsDeforestationCloneFlipped,
  ] = useState(false);
  const [
    isGlobalWarmingCloneFlipped,
    setIsGlobalWarmingCloneFlipped,
  ] = useState(false);
  const [
    isGreenhouseEffectCloneFlipped,
    setIsGreenhouseEffectCloneFlipped,
  ] = useState(false);
  const [isLitteringCloneFlipped, setIsLitteringCloneFlipped] = useState(false);
  const [
    isMeltingIceCapsCloneFlipped,
    setIsMeltingIceCapsCloneFlipped,
  ] = useState(false);
  const [isOzoneHoleCloneFlipped, setIsOzoneHoleCloneFlipped] = useState(false);
  const [isRecycleCloneFlipped, setIsRecycleCloneFlipped] = useState(false);
  const [
    isWaterPollutionCloneFlipped,
    setIsWaterPollutionCloneFlipped,
  ] = useState(false);

  const cardStates = [
    [isAcidRainFlipped, setIsAcidRainFlipped],
    [isAirPollutionFlipped, setIsAirPollutionFlipped],
    [isAlternateEnergyFlipped, setIsAlternateEnergyFlipped],
    [isChemicalWasteFlipped, setIsChemicalWasteFlipped],
    [isDeforestationFlipped, setIsDeforestationFlipped],
    [isGlobalWarmingFlipped, setIsGlobalWarmingFlipped],
    [isGreenhouseEffectFlipped, setIsGreenhouseEffectFlipped],
    [isLitteringFlipped, setIsLitteringFlipped],
    [isMeltingIceCapsFlipped, setIsMeltingIceCapsFlipped],
    [isOzoneHoleFlipped, setIsOzoneHoleFlipped],
    [isRecycleFlipped, setIsRecycleFlipped],
    [isWaterPollutionFlipped, setIsWaterPollutionFlipped],
    [isAcidRainCloneFlipped, setIsAcidRainCloneFlipped],
    [isAirPollutionCloneFlipped, setIsAirPollutionCloneFlipped],
    [isAlternateEnergyCloneFlipped, setIsAlternateEnergyCloneFlipped],
    [isChemicalWasteCloneFlipped, setIsChemicalWasteCloneFlipped],
    [isDeforestationCloneFlipped, setIsDeforestationCloneFlipped],
    [isGlobalWarmingCloneFlipped, setIsGlobalWarmingCloneFlipped],
    [isGreenhouseEffectCloneFlipped, setIsGreenhouseEffectCloneFlipped],
    [isLitteringCloneFlipped, setIsLitteringCloneFlipped],
    [isMeltingIceCapsCloneFlipped, setIsMeltingIceCapsCloneFlipped],
    [isOzoneHoleCloneFlipped, setIsOzoneHoleCloneFlipped],
    [isRecycleCloneFlipped, setIsRecycleCloneFlipped],
    [isWaterPollutionCloneFlipped, setIsWaterPollutionCloneFlipped],
  ];

  return <MemoryGameComponent cardStates={cardStates} />;
};

export default MemoryGame;
