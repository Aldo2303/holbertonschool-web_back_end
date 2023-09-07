#!/usr/bin/env python3
"""
function that changes all topics of a school document based on the name
Method: def update_topics(mongo_collection, name, topics)
"""
from typing import List


def update_topics(mongo_collection, name: str, topics: List) -> None:
    """
    update_topics: changes all topics of a school document based on the name
    """
    if mongo_collection is None:
        return None
    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
