import lyricwikia

Singer = raw_input("Singer - ")
Song = raw_input("Song - ")

lyrics = lyricwikia.get_lyrics(Singer, Song)

with open("Output.txt", "w") as text_file:
    text_file.write("Song: %s \n\n" % Song)
    text_file.write("lyrics: \n%s " % lyrics)
