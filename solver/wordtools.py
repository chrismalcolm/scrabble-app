"""
    This module provides classes making the process of checking word
    spelling more efficient.
"""

from collections import defaultdict


class WordHash():
    """
        Hash table object, used as an efficient method for looking up
        words with particular letters in given positions. Reverse hash
        lookups can be used to return the set of all words with a given
        length and a particular letter at a given index. Words may
        belong to more that one set.

        Attributes:
        > hash_table (dict) - keys are hashes, values are sets of the
            words with that hash
    """

    def __init__(self):
        self.hash_table = defaultdict(set)

    def add_word(self, word):
        """Add the word to hash_table."""
        length = len(word)
        for position, letter in enumerate(word):
            hash_value = self._hasher(length, letter, position)
            self.hash_table[hash_value].add(word)

    def lookup(self, length, letter, position):
        """Returns the set of added words with the given length and with
        the given letter in the given position."""
        hash_value = self._hasher(length, letter, position)
        return self.hash_table[hash_value]

    def clear_words(self):
        """Clears the all words from the hash table."""
        self.hash_table = defaultdict(set)

    @staticmethod
    def _hasher(length, letter, position):
        """Returns a hash combining the given arguments."""
        return str(length) + letter + str(position)
