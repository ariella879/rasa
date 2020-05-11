from typing import Text
import ruamel.yaml as yaml

import pytest
import tests.utilities

from rasa.nlu.config import RasaNLUModelConfig
from rasa.nlu.components import ComponentBuilder
from rasa.utils.tensorflow.constants import EPOCHS, RANDOM_SEED

DEFAULT_DATA_PATH = "data/examples/rasa/demo-rasa.json"


@pytest.fixture(scope="session")
def component_builder():
    return ComponentBuilder()


@pytest.fixture(scope="session")
def spacy_nlp(component_builder, blank_config):
    spacy_nlp_config = {"name": "SpacyNLP"}
    return component_builder.create_component(spacy_nlp_config, blank_config).nlp


@pytest.fixture(scope="session")
def spacy_nlp_component(component_builder, blank_config):
    spacy_nlp_config = {"name": "SpacyNLP"}
    return component_builder.create_component(spacy_nlp_config, blank_config)


@pytest.fixture(scope="session")
def mitie_feature_extractor(component_builder: ComponentBuilder, blank_config):
    mitie_nlp_config = {"name": "MitieNLP"}
    return component_builder.create_component(mitie_nlp_config, blank_config).extractor


@pytest.fixture(scope="session")
def blank_config() -> RasaNLUModelConfig:
    return RasaNLUModelConfig({"language": "en", "pipeline": []})


@pytest.fixture(scope="session")
def config_path() -> Text:
    return tests.utilities.write_file_config(
        yaml.safe_dump(
            {
                "language": "en",
                "pipeline": [
                    {"name": "WhitespaceTokenizer"},
                    {"name": "CRFEntityExtractor", EPOCHS: 1, RANDOM_SEED: 42},
                    {"name": "CountVectorsFeaturizer"},
                    {"name": "EmbeddingIntentClassifier", EPOCHS: 1, RANDOM_SEED: 42},
                ],
            }
        )
    )


@pytest.fixture(scope="session")
def config_path_duplicate() -> Text:
    return write_file_config(
        yaml.safe_dump(
            {
                "language": "en",
                "pipeline": [
                    {"name": "WhitespaceTokenizer"},
                    {"name": "CRFEntityExtractor", EPOCHS: 1, RANDOM_SEED: 42},
                    {"name": "CountVectorsFeaturizer"},
                    {"name": "EmbeddingIntentClassifier", EPOCHS: 1, RANDOM_SEED: 42},
                ],
            }
        )
    )


@pytest.fixture()
def pretrained_embeddings_spacy_config() -> RasaNLUModelConfig:
    return RasaNLUModelConfig(
        {
            "language": "en",
            "pipeline": [
                {"name": "SpacyNLP"},
                {"name": "SpacyTokenizer"},
                {"name": "SpacyFeaturizer"},
                {"name": "RegexFeaturizer"},
                {"name": "CRFEntityExtractor", EPOCHS: 1, RANDOM_SEED: 42},
                {"name": "EntitySynonymMapper"},
                {"name": "SklearnIntentClassifier"},
            ],
        }
    )


@pytest.fixture()
def supervised_embeddings_config() -> RasaNLUModelConfig:
    return RasaNLUModelConfig(
        {
            "language": "en",
            "pipeline": [
                {"name": "WhitespaceTokenizer"},
                {"name": "RegexFeaturizer"},
                {"name": "CRFEntityExtractor", EPOCHS: 1, RANDOM_SEED: 42},
                {"name": "EntitySynonymMapper"},
                {"name": "CountVectorsFeaturizer"},
                {
                    "name": "CountVectorsFeaturizer",
                    "analyzer": "char_wb",
                    "min_ngram": 1,
                    "max_ngram": 4,
                },
                {"name": "EmbeddingIntentClassifier", EPOCHS: 1, RANDOM_SEED: 42},
            ],
        }
    )


@pytest.fixture()
def pretrained_embeddings_convert_config() -> RasaNLUModelConfig:
    return RasaNLUModelConfig(
        {
            "language": "en",
            "pipeline": [
                {"name": "ConveRTTokenizer"},
                {"name": "ConveRTFeaturizer"},
                {"name": "EmbeddingIntentClassifier", EPOCHS: 1, RANDOM_SEED: 42},
            ],
        }
    )
