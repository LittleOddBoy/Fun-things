using System;
using System.Collections.Generic;

class Program
{
    static void Main(string[] args)
    {
        string password = GeneratePassword();
        Console.WriteLine(password);
    }

    static string GeneratePassword()
    {
        Random rng = new Random();

        IEnumerable<char> GenerateSequence(char start, char end, int count)
        {
            for (int i = 0; i < count; i++)
            {
                yield return (char)rng.Next(start, end + 1);
            }
        }

        IEnumerable<char> GeneratePasswordCodes()
        {
            foreach (var c in GenerateSequence('!', '/', 4)) // Special characters
                yield return c;

            foreach (var c in GenerateSequence('0', '9', 4)) // Numbers 0..9
                yield return c;

            foreach (var c in GenerateSequence('A', 'Z', 4))  // Uppercase A..Z
                yield return c;

            foreach (var c in GenerateSequence('a', 'z', 4))  // Lowercase a..z
                yield return c;
        }

        string password = string.Concat(GeneratePasswordCodes());
        return RandomizeString(password);
    }

    static string RandomizeString(string str)
    {
        char[] arr = str.ToCharArray();
        Random rng = new Random();

        for (int i = arr.Length - 1; i > 0; i--)
        {
            int j = rng.Next(i + 1);
            char temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }

        return new string(arr);
    }
}
