#!/usr/bin/env python3
"""
function that returns the list of school having a specific topic
Method: def schools_by_topic(mongo_collection, topic)
"""
from typing import List


def schools_by_topic(mongo_collection, topic: str) -> List:
    """
    return: list of school having specific topic(topics is contained in a list)
    """
    if mongo_collection is None:
        return []
    return mongo_collection.find({"topics": topic})
